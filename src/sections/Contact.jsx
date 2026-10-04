import { Mail, PhoneCall } from "lucide-react"
import { Clients } from "../components/Clients"

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-[#8d6b38] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_.7fr]">
          <div>
            <p className="py-2 text-xs font-bold uppercase tracking-[.25em] text-white/70">
              Contact Anay Milpestcon Pest Control
            </p>

            <h2 className="mt-5 py-3 font-['DM_Serif_Display'] text-4xl leading-none lg:text-6xl">
              For fast help, call us.
            </h2>

            <p className="mt-6 w-full text-sm leading-relaxed text-white/80 lg:text-lg">
              Arrange your inspection or pest treatment by phone. Our email is for quotation
              requests only.
            </p>

            <a
              href="tel:+639667085441"
              className="mt-8 inline-flex items-center gap-3 border-b-4 border-white pb-2 text-2xl font-bold lg:text-3xl"
            >
              <PhoneCall size={24} />
              (+63) 966-708-5441
            </a>
          </div>

          <div className="w-full bg-[#f6f2ea] p-8 text-[#292821]">
            <p className="py-2 text-xs font-bold uppercase tracking-[.2em] text-[#8d6b38]">
              Quotations by email
            </p>

            <h3 className="mt-4 font-['DM_Serif_Display'] text-3xl">
              Tell us about your property.
            </h3>

            <p className="mt-4 leading-relaxed text-[#292821]/70">
              For a quotation, email your pest issue, location, and the service you need.
            </p>

            <a
              href="mailto:pestcontrolanaymilpestcon@gmail.com"
              className="mt-7 inline-flex max-w-full items-center gap-2 whitespace-nowrap font-bold text-xs text-[#8d6b38] lg:text-base xl:text-lg"
            >
              <Mail size={18} className="shrink-0" />
              <span>pestcontrolanaymilpestcon@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      <section>
        <Clients />
      </section>
    </>
  )
}
