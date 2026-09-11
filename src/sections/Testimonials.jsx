import React, { useEffect, useMemo, useState } from 'react'
import { Star } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL

const DEFAULT_TESTIMONIALS = [
    {
        id: 1,
        name: "Robert Harrison",
        location: "Homeowner",
        rating: 5,
        comment: "Great service. The team was professional and very helpful.",
    },
    {
        id: 2,
        name: "Clara Thompson",
        location: "Homeowner",
        rating: 5,
        comment: "Fast and reliable service. Very satisfied with the treatment.",
    },
    {
        id: 3,
        name: "Marcus Johnson",
        location: "Homeowner",
        rating: 5,
        comment: "Friendly staff and excellent service. Highly recommended.",
    },
    {
        id: 4,
        name: "Angela Reyes",
        location: "Homeowner",
        rating: 5,
        comment: "Very accommodating and easy to communicate with.",
    },
    {
        id: 5,
        name: "Michael Santos",
        location: "Homeowner",
        rating: 4,
        comment: "Good service and the treatment was done properly.",
    },
    {
        id: 6,
        name: "Jenny Cruz",
        location: "Homeowner",
        rating: 5,
        comment: "Very satisfied. The team was polite and professional.",
    },
]

function getVisibleCount() {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2

    return 3
}

function Testimonials() {
    const [testimonials, setTestimonials] = useState(DEFAULT_TESTIMONIALS)
    const [visibleCount, setVisibleCount] = useState(getVisibleCount)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        async function fetchTestimonials() {
            if (!API_URL) return

            try {
                const response = await fetch(`${API_URL}/testimonials`)

                if (!response.ok) {
                    throw new Error('Failed to load testimonials')
                }

                const data = await response.json()

                if (data.testimonials?.length) {
                    setTestimonials(data.testimonials)
                }
            } catch (error) {
                console.error(error)
                setTestimonials(DEFAULT_TESTIMONIALS)
            }
        }

        fetchTestimonials()
    }, [])

    useEffect(() => {
        function handleResize() {
            setVisibleCount(getVisibleCount())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const averageRating = useMemo(() => {
        if (!testimonials.length) return 0

        const total = testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0)

        return total / testimonials.length
    }, [testimonials])

    const maxIndex = Math.max(testimonials.length - visibleCount, 0)
    const slideDistance = maxIndex * (100 / visibleCount)

    return (
        <section id="testimonials" className="overflow-hidden px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
                        Customer Reviews
                    </span>

                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Loved By Our Customers
                    </h2>

                    <p className="secondary-font mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 lg:text-base">
                        See what our customers have to say about their experience with our pest control services.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-3">
                        <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} className={`size-4 ${index < Math.round(averageRating) ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                            ))}
                        </div>

                        <span className="text-sm font-semibold text-slate-900">
                            {averageRating.toFixed(1)}
                        </span>

                        <span className="secondary-font text-sm text-slate-500">
                            ({testimonials.length} reviews)
                        </span>
                    </div>
                </div>

                <div className="relative mt-12 overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>

                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent" />

                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent" />

                    <div className="testimonial-strip flex" style={{ '--slide-distance': `${slideDistance}%`, animationPlayState: isPaused ? 'paused' : 'running' }}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="shrink-0 px-2" style={{ width: `${100 / visibleCount}%` }}>
                                <article className="h-full rounded-xl border border-slate-200 bg-white p-6 transition-colors duration-300 hover:bg-yellow-50">
                                    <div className="flex gap-1">
                                        {Array.from({ length: 5 }).map((_, index) => (
                                            <Star key={index} className={`size-4 ${index < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`} />
                                        ))}
                                    </div>

                                    <p className="secondary-font mt-5 min-h-18 text-sm leading-6 text-slate-600">
                                        “{testimonial.comment}”
                                    </p>

                                    <div className="mt-6 border-t border-slate-100 pt-4">
                                        <p className="font-semibold text-slate-900">
                                            {testimonial.name}
                                        </p>

                                        <p className="secondary-font mt-1 text-xs text-slate-500">
                                            {testimonial.location}
                                        </p>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials