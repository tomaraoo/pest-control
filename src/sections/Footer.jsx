import { ArrowUpRight, Clock3, MapPin, ShieldCheck } from "lucide-react"
import { scrollToSection } from "../lib/constants"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-callout">
        <div>
          <span className="eyebrow">Make room for peace of mind</span>
          <h2>A healthier space starts here.</h2>
        </div>
        <button
          type="button"
          className="button button-primary"
          onClick={() => scrollToSection("contact")}
        >
          Contact our team
          <ArrowUpRight size={19} />
        </button>
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <ShieldCheck size={28} />
          <strong>MILPESTCON</strong>
          <p>
            Local care for the places that matter. Pest inspection, treatment, and prevention for
            homes and businesses.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h3>Explore</h3>
          <button type="button" onClick={() => scrollToSection("services")}>
            Our services
          </button>
          <button type="button" onClick={() => scrollToSection("why-us")}>
            Why Milpestcon
          </button>
          <button type="button" onClick={() => scrollToSection("faq")}>
            FAQs
          </button>
          <button type="button" onClick={() => scrollToSection("contact")}>
            Contact us
          </button>
        </nav>
        <div className="footer-info">
          <h3>Here for your property</h3>
          <p>
            <MapPin size={17} />
            Bulacan and nearby areas
          </p>
          <p>
            <Clock3 size={17} />
            Monday–Saturday · 7 AM–7 PM
          </p>
          <p>
            Call, text, or email our team to ask about treatment and schedule a visit.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Milpestcon. All rights reserved.</p>
        <span>Inspection · Treatment · Prevention</span>
      </div>
    </footer>
  )
}
