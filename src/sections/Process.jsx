import { ClipboardList, SearchCheck, ShieldCheck, Sprout } from "lucide-react"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

const icons = [ClipboardList, SearchCheck, ShieldCheck, Sprout]

export default function Process() {
  const { language } = useLanguage()
  const copy = translations[language].process
  return (
    <section id="process" className="process-section">
      <div className="section-shell">
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
        <div className="process-grid">
          {copy.steps.map((step, index) => {
            const Icon = icons[index]
            return (
              <article className="process-card" key={step.title}>
                <div className="process-card-top">
                  <span className="process-icon">
                    <Icon size={24} />
                  </span>
                  <span className="process-number">{"0" + (index + 1)}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
