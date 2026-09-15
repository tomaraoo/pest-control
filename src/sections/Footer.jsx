import { ArrowUpRight, Clock3, MapPin, ShieldCheck } from "lucide-react"
import { scrollToSection } from "../lib/constants"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

export default function Footer() {
  const { language } = useLanguage()
  const copy = translations[language].footer

  return (
    <footer className="site-footer">
      <div className="footer-callout">
        <div>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.title}</h2>
        </div>
        <button
          type="button"
          className="button button-primary"
          onClick={() => scrollToSection("contact")}
        >
          {copy.contact}
          <ArrowUpRight size={19} />
        </button>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <ShieldCheck size={28} />
          <strong>MILPESTCON</strong>
          <p>{copy.brand}</p>
        </div>
        <nav aria-label={copy.explore}>
          <h3>{copy.explore}</h3>
          <button type="button" onClick={() => scrollToSection("services")}>
            {copy.services}
          </button>
          <button type="button" onClick={() => scrollToSection("why-us")}>
            {copy.why}
          </button>
          <button type="button" onClick={() => scrollToSection("faq")}>
            {copy.faq}
          </button>
          <button type="button" onClick={() => scrollToSection("contact")}>
            {copy.contactUs}
          </button>
        </nav>
        <div className="footer-info">
          <h3>{copy.property}</h3>
          <p>
            <MapPin size={17} />
            {copy.area}
          </p>
          <p>
            <Clock3 size={17} />
            {copy.hours}
          </p>
          <p>{copy.note}</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Milpestcon. {copy.rights}
        </p>
        <span>{copy.closing}</span>
      </div>
    </footer>
  )
}
