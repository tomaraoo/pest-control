import { BadgeCheck, Clock3, ShieldCheck } from "lucide-react"
import p2 from "../assets/p-2.png"

const reasons = [
  {
    icon: BadgeCheck,
    title: "A plan for your property",
    description: "We assess the problem and prepare treatment around your space and pest concerns.",
  },
  {
    icon: Clock3,
    title: "Clear communication",
    description: "Know your schedule, what to prepare, and what to expect when our team arrives.",
  },
  {
    icon: ShieldCheck,
    title: "Care beyond the visit",
    description:
      "Practical prevention guidance helps you look after your property after treatment.",
  },
]

export default function Why() {
  return (
    <section id="why-us" className="section-shell why-section">
      <div className="why-visual">
        <img src={p2} alt="Milpestcon team providing pest treatment" loading="lazy" />
        <div className="why-caption">
          <strong>Local experience.</strong>
          <span>Personal attention for every property.</span>
        </div>
      </div>
      <div className="why-content">
        <span className="eyebrow">The Milpestcon approach</span>
        <h2>
          Good care starts
          <br />
          with listening.
        </h2>
        <p>
          Pest concerns shouldn't take over your day. We bring practical experience, thoughtful
          treatment, and a team you can talk to.
        </p>
        <div className="why-reasons">
          {reasons.map((reason) => (
            <article key={reason.title}>
              <span>
                <reason.icon size={23} />
              </span>
              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
