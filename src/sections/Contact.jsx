import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react"

const phone = "+63 912 345 6789"
const email = "sample@gmail.com"

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-shell">
        <div className="contact-panel">
          <div className="contact-copy">
            <span className="eyebrow">Contact Milpestcon</span>
            <h2>
              Need help with
              <br />a pest problem?
            </h2>
            <p>Call, text, or email us to discuss your property and request a service schedule.</p>
          </div>

          <div className="contact-options">
            <a className="contact-option" href={`tel:${phone.replace(/\s/g, "")}`}>
              <span className="contact-option-icon">
                <Phone size={22} />
              </span>
              <span>
                <small>Call or text</small>
                <strong>{phone}</strong>
              </span>
              <ArrowUpRight size={19} />
            </a>

            <a className="contact-option" href={`mailto:${email}`}>
              <span className="contact-option-icon">
                <Mail size={22} />
              </span>
              <span>
                <small>Email us</small>
                <strong>{email}</strong>
              </span>
              <ArrowUpRight size={19} />
            </a>

            <div className="contact-meta">
              <span>
                <MapPin size={18} />
                Bulacan and nearby areas
              </span>
              <span>
                <Clock3 size={18} />
                Monday–Saturday · 7 AM–7 PM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
