import { ArrowRight, Check, ShieldCheck } from "lucide-react"
import p1 from "../assets/p-1.jpg"
import { scrollToSection } from "../lib/constants"

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <span className="eyebrow">
          <span className="status-dot" />
          Local specialists. Lasting peace of mind.
        </span>
        <h1>
          Your space.
          <br />
          Your peace.
          <br />
          <em>Protected.</em>
        </h1>
        <p>
          From termites to everyday household pests, get thoughtful treatment and dependable care
          for your home or business.
        </p>
        <div className="hero-actions">
          <button
            type="button"
            className="button button-primary"
            onClick={() => scrollToSection("contact")}
          >
            Request an assessment
            <ArrowRight size={19} />
          </button>
          <button
            type="button"
            className="button button-secondary"
            onClick={() => scrollToSection("services")}
          >
            Explore our services
          </button>
        </div>
        <ul className="hero-trust">
          <li>
            <Check size={15} />
            Homes & businesses
          </li>
          <li>
            <Check size={15} />
            Bulacan & nearby areas
          </li>
          <li>
            <Check size={15} />
            Serving since 2020
          </li>
        </ul>
      </div>
      <div className="hero-visual">
        <img
          src={p1}
          alt="Residential properties that benefit from regular pest inspection and treatment"
          fetchPriority="high"
        />
        <div className="hero-image-shade" />
        <div className="hero-image-caption">
          <span className="hero-caption-icon">
            <ShieldCheck size={25} />
          </span>
          <div>
            <strong>Care that goes beyond treatment.</strong>
            <span>Inspection. Treatment. Prevention.</span>
          </div>
        </div>
        <span className="hero-photo-label">CARE FOR HOMES & BUSINESSES</span>
      </div>
    </section>
  )
}
