import dtiLogo from "../assets/dti.png"
import fdaLogo from "../assets/fda.webp"
import leadsLogo from "../assets/leads.png"
import r3pmapLogo from "../assets/r3pmap.png"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

const logos = [
  { src: dtiLogo, alt: "Department of Trade and Industry Philippines" },
  { src: fdaLogo, alt: "Food and Drug Administration Philippines" },
  { src: r3pmapLogo, alt: "Region Three Pest Management Association of the Philippines" },
  { src: leadsLogo, alt: "LEADS Environmental Health" },
]

export default function Credentials() {
  const { language } = useLanguage()
  const copy = translations[language].credentials
  return (
    <section className="credentials-section" aria-labelledby="credentials-heading">
      <div className="credentials-inner">
        <div className="credentials-copy">
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2 id="credentials-heading">{copy.title}</h2>
        </div>
        <div className="credentials-logos">
          {logos.map((logo) => (
            <div className="credential-logo" key={logo.alt}>
              <img src={logo.src} alt={logo.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
