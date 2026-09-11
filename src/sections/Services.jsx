import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const services = [
    {
        title: "Anay Treatment",
        description: "Professional termite treatment to eliminate active colonies and help protect your property from structural damage.",
    },
    {
        title: "Langgam Control",
        description: "Targeted ant treatment for indoor and outdoor infestations, including common nesting and entry areas.",
    },
    {
        title: "Langaw Control",
        description: "Effective fly control solutions focused on breeding areas, sanitation risks, and common infestation points.",
    },
    {
        title: "Ipis Control",
        description: "Thorough cockroach treatment for kitchens, bathrooms, drains, cracks, and other common hiding areas.",
    },
    {
        title: "Bukbok Treatment",
        description: "Specialized treatment for wood-boring pests to help prevent further damage to furniture and wooden structures.",
    },
    {
        title: "Garapata Control",
        description: "Targeted tick treatment for affected indoor and outdoor areas to reduce infestation and prevent recurrence.",
    },
    {
        title: "At Iba Pa",
        description: "We also provide treatment for other common household and property pests. Contact us so we can assess your specific pest problem.",
    },
]


function Services() {
    const carouselRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
    const [maxIndex, setMaxIndex] = useState(services.length - 1)

    const scrollToCard = (index) => {
        const container = carouselRef.current
        const card = container?.children[index]

        if (!container || !card) return

        container.scrollTo({
            left: card.offsetLeft - container.offsetLeft,
            behavior: 'smooth',
        })

        setActiveIndex(index)
    }

    const handleScroll = () => {
        const container = carouselRef.current
        if (!container) return

        const cards = Array.from(container.children)
        const maxScrollLeft = container.scrollWidth - container.clientWidth

        if (Math.abs(container.scrollLeft - maxScrollLeft) < 5) {
            setActiveIndex(maxIndex)
            return
        }

        let closestIndex = 0
        let closestDistance = Infinity

        cards.forEach((card, index) => {
            const position = card.offsetLeft - container.offsetLeft
            const distance = Math.abs(position - container.scrollLeft)

            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })

        setActiveIndex(Math.min(closestIndex, maxIndex))
    }

    const updateMaxIndex = () => {
        const container = carouselRef.current
        if (!container) return

        const cards = Array.from(container.children)
        const maxScrollLeft = container.scrollWidth - container.clientWidth

        let closestIndex = 0
        let closestDistance = Infinity

        cards.forEach((card, index) => {
            const position = card.offsetLeft - container.offsetLeft
            const distance = Math.abs(position - maxScrollLeft)

            if (distance < closestDistance) {
                closestDistance = distance
                closestIndex = index
            }
        })

        setMaxIndex(closestIndex)
    }

    const handlePrevious = () => {
        scrollToCard(Math.max(activeIndex - 1, 0))
    }

    const handleNext = () => {
        scrollToCard(Math.min(activeIndex + 1, maxIndex))
    }

    useEffect(() => {
        updateMaxIndex()

        window.addEventListener('resize', updateMaxIndex)

        return () => {
            window.removeEventListener('resize', updateMaxIndex)
        }
    }, [])

    return (
        <section id="services" className="overflow-hidden py-20">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
                        Services
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Specialized Pest Treatment
                    </h2>

                    <p className="secondary-font mt-4 text-sm leading-7 text-slate-600 lg:text-base">
                        Professional pest control solutions for termites, ants, flies, cockroaches, wood-boring pests, ticks, and other common household infestations.
                    </p>
                </div>

                <div
                    ref={carouselRef}
                    onScroll={handleScroll}
                    className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {services.map((service) => (
                        <article key={service.title} className="group flex min-h-50 shrink-0 basis-[88%] snap-start flex-col rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-yellow-300 hover:bg-yellow-50 sm:basis-[55%] sm:p-8 lg:basis-[32%]" >
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="secondary-font mt-4 text-sm leading-6 text-slate-600">
                                    {service.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={handlePrevious}
                        disabled={activeIndex === 0}
                        className="hidden lg:flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-slate-300 transition hover:bg-[#FCB444] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center justify-center gap-2">
                        {services.slice(0, maxIndex + 1).map((service, index) => (
                            <button
                                key={service.title}
                                type="button"
                                aria-label={`Go to ${service.title}`}
                                onClick={() => scrollToCard(index)}
                                className={`h-2.5 cursor-pointer rounded-full transition-all duration-300 ${activeIndex === index
                                    ? 'w-7 bg-[#FCB444]'
                                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={handleNext}
                        disabled={activeIndex === maxIndex}
                        className="hidden lg:flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-slate-300 transition hover:bg-[#FCB444] disabled:cursor-not-allowed disabled:opacity-30"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Services