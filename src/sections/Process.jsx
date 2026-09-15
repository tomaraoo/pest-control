import { ClipboardList, SearchCheck, ShieldCheck, Sprout } from "lucide-react"

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Tell us what you see",
    text: "Share the pest concern, property type, location, and any areas where you have noticed activity.",
  },
  {
    icon: SearchCheck,
    number: "02",
    title: "We assess the property",
    text: "Our team looks at the affected areas, possible entry points, and conditions that may be attracting pests.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Treatment is planned",
    text: "We recommend a treatment based on the pest, the property, and the level of activity we find.",
  },
  {
    icon: Sprout,
    number: "04",
    title: "Prevention comes next",
    text: "You receive practical guidance for reducing pest activity and protecting the space after treatment.",
  },
]

export default function Process() {
  return (
    <section id="process" className="process-section">
      <div className="section-shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">What to expect</span>
            <h2>
              A clear plan.
              <br />
              From first look to follow-through.
            </h2>
          </div>
          <p>
            Effective pest control starts with understanding the problem—not simply treating what is
            visible.
          </p>
        </div>
        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-card-top">
                <span className="process-icon">
                  <step.icon size={24} />
                </span>
                <span className="process-number">{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
