import { Plus } from "lucide-react"

const items = [
  {
    question: "How do I know which pest treatment I need?",
    answer:
      "You do not need to diagnose the problem yourself. Tell us what you have noticed and where the activity appears. We can assess the property and recommend an appropriate treatment plan.",
  },
  {
    question: "How should I prepare before a treatment?",
    answer:
      "Preparation depends on the pest and treatment method. We will explain any steps before the visit, such as clearing access to affected areas, storing food, or moving small items away from walls.",
  },
  {
    question: "Is pest treatment suitable for homes with children or pets?",
    answer:
      "Let us know about children, pets, allergies, or other concerns when you inquire. Our team will explain the precautions and re-entry guidance that apply to the recommended treatment.",
  },
  {
    question: "Do I need to leave the property during service?",
    answer:
      "That depends on the treatment and the areas being serviced. We will tell you in advance whether anyone needs to step out and when the treated space may be used again.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "Milpestcon serves homes and businesses in Bulacan and nearby areas. Send us your barangay, municipality, or city so we can confirm coverage for your location.",
  },
  {
    question: "Will one visit solve the problem?",
    answer:
      "Some pest concerns can be addressed in one visit, while others may need monitoring or follow-up treatment. The recommended plan will depend on the pest, the level of activity, and the property.",
  },
]

export default function Faq() {
  return (
    <section id="faq" className="section-shell faq-section">
      <div>
        <span className="eyebrow">Before we visit</span>
        <h2>
          Good questions.
          <br />
          Clear answers.
        </h2>
        <p>Helpful answers before you request a pest control assessment.</p>
      </div>
      <div className="faq-list">
        {items.map((item) => (
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
