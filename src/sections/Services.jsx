import { ArrowUpRight, Bug, ShieldCheck } from "lucide-react"
import { scrollToSection } from "../lib/constants"

const services = [
  {
    title: "Termite treatment",
    local: "Anay",
    text: "Address active colonies and help protect the wood and structure of your property.",
  },
  {
    title: "Cockroach control",
    local: "Ipis",
    text: "Focused treatment for kitchens, drains, hidden cracks, and common nesting areas.",
  },
  {
    title: "Ant & fly control",
    local: "Langgam & langaw",
    text: "Target pest activity and breeding areas to make everyday spaces more comfortable.",
  },
  {
    title: "Wood-borer treatment",
    local: "Bukbok",
    text: "Specialized attention for affected furniture, timber, and wooden fixtures.",
  },
  {
    title: "Tick control",
    local: "Garapata",
    text: "Manage affected indoor and outdoor areas with a treatment plan for your property.",
  },
  {
    title: "Other pest concerns",
    local: "Tell us what you need",
    text: "Not sure what you are dealing with? Let our team assess the problem with you.",
  },
]

export default function Services() {
  return (
    <section id="services" className="section-shell services-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">A solution for your space</span>
          <h2>
            Small pests.
            <br />
            Serious attention.
          </h2>
        </div>
        <p>
          Every property is different. We help you choose treatments that address the problem and
          support ongoing protection.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <article key={service.title} className="service-card">
            <div className="service-card-top">
              <span className="service-icon">
                {index === 0 ? <ShieldCheck size={25} /> : <Bug size={25} />}
              </span>
              <span className="service-number">{"0" + (index + 1)}</span>
            </div>
            <span className="service-local">{service.local}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <button type="button" onClick={() => scrollToSection("contact")}>
              Ask about this service
              <ArrowUpRight size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
