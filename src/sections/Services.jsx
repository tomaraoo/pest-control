import { ArrowUpRight, Bug, ShieldCheck } from "lucide-react"
import { scrollToSection } from "../lib/constants"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

export default function Services() {
  const { language } = useLanguage()
  const copy = translations[language].services
  return (
    <section id="services" className="section-shell services-section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>
            {copy.line1}
            <br />
            {copy.line2}
          </h2>
        </div>
        <p>{copy.intro}</p>
      </div>
      <div className="services-grid">
        {copy.items.map((service, index) => (
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
              {copy.action}
              <ArrowUpRight size={18} />
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
