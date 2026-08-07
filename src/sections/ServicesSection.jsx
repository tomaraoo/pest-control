const services = [
    {
        title: "Termite Inspection",
        description: `Thorough inspection of your property to identify active infestations, damage, and potential termite entry points.`
    },
    {
        title: "Soil Treatment",
        description: `Application of professional termiticide around foundations to create a protective barrier against subterranean termites.`
    },
    {
        title: "Termite Baiting System",
        description: `Strategic installation of termite bait stations to eliminate colonies and provide continuous protection.`
    },
    {
        title: "Wood Treatment",
        description: `Direct treatment of vulnerable or infested wooden structures to eliminate termites and reduce future attacks.`
    },
    {
        title: "Pre-Construction Treatment",
        description: `Preventive termite treatment applied during construction to protect the building before infestation can occur.`
    },
    {
        title: "Post-Construction Treatment",
        description: `Targeted treatment for existing homes and buildings using drilling, injection, and perimeter barrier methods.`
    },
]

export default function ServicesSection() {
    return (
        <>
            <section className="min-h-screen p-10">
                <div className="flex flex-col gap-5 justify-center items-center px-6 py-12 lg:px-16 text-center">
                    <span className="bg-green-100 px-5 py-1 rounded-lg uppercase tracking-[.05rem] font-bold">Services</span>
                    <span className="lg:text-5xl text-3xl font-bold">Comprehensive Termite Solutions</span>
                    <span className="text-gray-500 lg:text-sm text-xs">From urgent infestations to preventative barriers, our licensed exterminators utilize state-of-the-art, family-safe methods to keep your home termites-free.</span>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {

                        return (
                            <article
                                key={service.title}
                                className="group relative min-h-64 bg-white p-6 transition-colors duration-300 hover:bg-green-50 sm:p-8"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <span className="font-mono text-xs text-slate-400">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <h3 className="mt-8 text-xl font-semibold tracking-tight text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm leading-6 text-slate-600">
                                    {service.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </section>
        </>
    )
}