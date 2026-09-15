import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import p1 from "../assets/p-1.jpg"
import { scrollToSection } from "../lib/constants"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

export default function Hero() {
  const { language } = useLanguage()
  const copy = translations[language].hero
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" />
          {copy.eyebrow}
        </span>
        <h1>
          {copy.line1}
          <br />
          {copy.line2}
          <br />
          <em>{copy.line3}</em>
        </h1>
        <p>{copy.text}</p>
        <div className="hero-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={() => scrollToSection("contact")}
          >
            {copy.primary}
            <ArrowRight size={19} />
          </button>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => scrollToSection("services")}
          >
            {copy.secondary}
          </button>
        </div>
        <ul className="hero-trust">
          {copy.trust.map((item) => (
            <li key={item}>
              <Check size={15} />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-visual">
        <img src={p1} alt={copy.imageAlt} fetchPriority="high" />
        <div className="hero-image-shade" />
        <div className="hero-image-caption">
          <span className="hero-caption-icon">
            <ShieldCheck size={25} />
          </span>
          <div>
            <strong>{copy.caption}</strong>
            <span>{copy.captionDetail}</span>
          </div>
        </div>
        <span className="hero-photo-label">{copy.photoLabel}</span>
      </div>
    </section>
  )
}
