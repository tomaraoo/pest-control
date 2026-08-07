const services = [
    {
        title: "Anay Treatment",
        description:
            "Professional termite treatment to eliminate active colonies and help protect your property from structural damage.",
    },
    {
        title: "Langgam Control",
        description:
            "Targeted ant treatment for indoor and outdoor infestations, including common nesting and entry areas.",
    },
    {
        title: "Langaw Control",
        description:
            "Effective fly control solutions focused on breeding areas, sanitation risks, and common infestation points.",
    },
    {
        title: "Ipis Control",
        description:
            "Thorough cockroach treatment for kitchens, bathrooms, drains, cracks, and other common hiding areas.",
    },
    {
        title: "Bukbok Treatment",
        description:
            "Specialized treatment for wood-boring pests to help prevent further damage to furniture and wooden structures.",
    },
    {
        title: "Garapata Control",
        description:
            "Targeted tick treatment for affected indoor and outdoor areas to reduce infestation and prevent recurrence.",
    },
    {
        title: "At Iba Pa",
        description:
            "We also provide treatment for other common household and property pests. Contact us so we can assess your specific pest problem.",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <div className="max-w-2xl">
                    <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
                        Services
                    </span>

                    <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                        Specialized Pest Treatment
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-slate-600 lg:text-base secondary-font">
                        Professional pest control solutions for termites, ants, flies,
                        cockroaches, wood-boring pests, ticks, and other common household
                        infestations.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 gap-px sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const isLast = index === services.length - 1;

                        return (
                            <article
                                key={service.title}
                                className={`group relative bg-white p-6 transition-colors duration-300 hover:bg-yellow-50 sm:p-8 ${isLast ? "sm:col-span-2 lg:col-span-3 lg:min-h-48" : "min-h-64"} `}>
                                <span className="font-mono text-xs text-slate-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className={isLast ? "mt-8 max-w-5xl" : ""}>
                                    <h3 className={`text-xl font-semibold tracking-tight text-slate-900 ${isLast ? "" : "mt-8"}`}>
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600 secondary-font">
                                        {service.description}
                                    </p>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}