import { Gallery } from "../components/Gallery"

const services = [
  { title: "Termites", text: "Detailed inspection and treatment for termite activity and protection needs." },
  { title: "Cockroaches & ants", text: "General pest control built around the source of recurring activity." },
  { title: "Rodents", text: "Control activity and identify the points pests use to get inside." },
  { title: "Mosquitoes", text: "Target breeding areas and support a more comfortable outdoor space." },
]

export default function Services() {
  return (
    <>
      <section id="services" className="bg-[#292821] px-6 py-24 text-[#f6f2ea]">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#c9a46a] py-3">Our pest-control services</p>
          <h2 className="mt-4 max-w-2xl font-['DM_Serif_Display'] text-5xl">Careful service for the pests that interrupt your space.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) =>
              <article className="border-t border-white/20 pt-5" key={service.title}>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="!mt-4 text-sm leading-relaxed text-white/65">{service.text}</p>
              </article>)
            }
          </div>
        </div>

        <div className="mx-auto mt-15 w-full max-w-8xl">
          <Gallery />
        </div>

      </section>
    </>
  )
}
