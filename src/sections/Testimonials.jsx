import React, { useEffect, useMemo, useState } from 'react'
import { Star } from 'lucide-react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../firebase'

function getVisibleCount() {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth < 640) return 1
    if (window.innerWidth < 1024) return 2

    return 3
}

function TestimonialCard({ testimonial }) {
    return (
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
                    {testimonial.clientType}
                </p>
            </div>
        </article>
    )
}

function Testimonials() {
    const [testimonials, setTestimonials] = useState([])
    const [visibleCount, setVisibleCount] = useState(getVisibleCount)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        const testimonialsQuery = query(
            collection(db, 'testimonials'),
            where('published', '==', true)
        )

        const unsubscribe = onSnapshot(
            testimonialsQuery,
            (snapshot) => {
                const data = snapshot.docs.map((document) => ({
                    id: document.id,
                    ...document.data(),
                }))

                setTestimonials(data)
            },
            (error) => {
                console.error('Firestore testimonials error:', error)
                setTestimonials([])
            }
        )

        return unsubscribe
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

        const total = testimonials.reduce((sum, testimonial) => sum + Number(testimonial.rating || 0), 0)

        return total / testimonials.length
    }, [testimonials])

    const hasAnimation = testimonials.length > 3
    const maxIndex = Math.max(testimonials.length - visibleCount, 0)
    const slideDistance = maxIndex * (100 / visibleCount)

    if (!testimonials.length) return null

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
                            ({testimonials.length} {testimonials.length === 1 ? 'review' : 'reviews'})
                        </span>
                    </div>
                </div>

                {hasAnimation ? (
                    <div className="relative mt-12 overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
                        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent" />

                        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent" />

                        <div className="testimonial-strip flex" style={{ '--slide-distance': `${slideDistance}%`, animationPlayState: isPaused ? 'paused' : 'running' }}>
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="shrink-0 px-2" style={{ width: `${100 / visibleCount}%` }}>
                                    <TestimonialCard testimonial={testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className={`mx-auto mt-12 grid gap-4 ${testimonials.length === 1 ? 'max-w-lg grid-cols-1' : testimonials.length === 2 ? 'max-w-4xl grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'}`}>
                        {testimonials.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default Testimonials