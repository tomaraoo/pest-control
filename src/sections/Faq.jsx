import { Plus } from "lucide-react"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

export default function Faq() {
  const { language } = useLanguage()
  const copy = translations[language].faq
  return (
    <section id="faq" className="section-shell faq-section">
      <div>
        <span className="eyebrow">{copy.eyebrow}</span>
        <h2>
          {copy.line1}
          <br />
          {copy.line2}
        </h2>
        <p>{copy.intro}</p>
      </div>
      <div className="faq-list">
        {copy.items.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>
              {item.question}
              <Plus size={20} />
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
