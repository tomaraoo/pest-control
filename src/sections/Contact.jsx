import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

const phone = "+63 912 345 6789"
const email = "sample@gmail.com"

export default function Contact() {
  const { language } = useLanguage()
  const copy = translations[language].contact
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">{copy.eyebrow}</span>
            <h2>
              {copy.line1}
              <br />
              {copy.line2}
            </h2>
            <p>{copy.text}</p>
          </div>

          <div className="contact-options">
            <a className="contact-option" href={`tel:${phone.replace(/\s/g, "")}`}>
              <span className="contact-option-icon">
                <Phone size={22} />
              </span>
              <span>
                <small>{copy.phone}</small>
                <strong>{phone}</strong>
              </span>
              <ArrowUpRight size={19} />
            </a>

            <a className="contact-option" href={`mailto:${email}`}>
              <span className="contact-option-icon">
                <Mail size={22} />
              </span>
              <span>
                <small>{copy.email}</small>
                <strong>{email}</strong>
              </span>
              <ArrowUpRight size={19} />
            </a>

            <div className="contact-meta">
              <span>
                <MapPin size={18} />
                {copy.area}
              </span>
              <span>
                <Clock3 size={18} />
                {copy.hours}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
