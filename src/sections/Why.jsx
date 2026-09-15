import { BadgeCheck, Clock3, ShieldCheck } from "lucide-react"
import p2 from "../assets/p-2.png"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

const icons = [BadgeCheck, Clock3, ShieldCheck]

export default function Why() {
  const { language } = useLanguage()
  const copy = translations[language].why
  return (
    <section id="why-us" className="section-shell why-section">
      <div className="why-visual">
        <img src={p2} alt={copy.imageAlt} loading="lazy" />
        <div className="why-caption">
          <strong>{copy.caption}</strong>
          <span>{copy.captionDetail}</span>
        </div>
      </div>
      <div className="why-content">
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>
          {copy.line1}
          <br />
          {copy.line2}
        </h2>
        <p>{copy.text}</p>
        <div className="why-reasons">
          {copy.reasons.map((reason, index) => {
            const Icon = icons[index]
            return (
              <article key={reason.title}>
                <span>
                  <Icon size={23} />
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
