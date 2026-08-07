import p1 from '../assets/p-1.jpg'
import { ShieldCheckIcon, Star } from 'lucide-react'

export default function HeroSection() {
    const scrollToSection = (sectionId) => {
        const target = document.getElementById(sectionId)

        if (!target) {
            return
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <section id="hero" className="relative min-h-screen overflow-hidden">
            <img
                src={p1}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#1E1701c9]" />

            <div className="relative z-10 flex min-h-screen items-center px-6 py-12 lg:px-16">
                <div className="max-w-2xl space-y-6">

                    <div className="flex items-center gap-2 text-sm font-semibold text-[#f59e0b]">
                        <ShieldCheckIcon className="size-5" />
                        <span>CERTIFIED LOCAL PEST SPECIALIST</span>
                    </div>

                    <div className="space-y-4 text-[#f4f4f4]">
                        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                            Protect Your Home & Family From Pests
                        </h1>

                        <p className="secondary-font max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                            Professional, eco-friendly pest control services tailored to your
                            neighborhood. Fast response, guaranteed results, and friendly
                            local service you can count on.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <button
                            type="button"
                            onClick={() => scrollToSection("booking")}
                            className="inline-flex items-center justify-center rounded-md bg-[#f59e0b] px-6 py-3 font-semibold text-[#78350f] transition-colors duration-300 hover:bg-[#d97706]"
                        >
                            Book Now
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollToSection("services")}
                            className="inline-flex items-center justify-center rounded-md bg-[#f4f4f4] px-6 py-3 font-semibold text-[#78350f] transition-colors duration-300 hover:bg-[#CBCCCD]"
                        >
                            Our Services
                        </button>
                    </div>

                    <div className="secondary-font flex flex-wrap items-center gap-3">
                        <div className="flex gap-1 text-yellow-500">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <Star
                                    key={index}
                                    className="size-5"
                                    fill="currentColor"
                                />
                            ))}
                        </div>

                        <span className="text-sm text-white/80">
                            Rated 4.95/5 by over 1,200 local homeowners
                        </span>
                    </div>

                </div>
            </div>
        </section>
    )
}