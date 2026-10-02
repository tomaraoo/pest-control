import { Mail, PhoneCall } from "lucide-react"

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-[#8d6b38] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.25em] text-white/70 py-2">Contact Milpestcon</p>
            <h2 className="mt-5 font-['DM_Serif_Display'] text-6xl leading-none py-3">For fast help, call us.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">Arrange your inspection or pest treatment by phone. Our email is for quotation requests only.</p>
            <a href="tel:+639667085441" className="mt-8 inline-flex items-center gap-3 border-b-4 border-white pb-2 text-3xl font-bold">
              <PhoneCall size={24} /> (+63) 966-708-5441</a>
          </div>
          <div className="bg-[#f6f2ea] p-8 text-[#292821]">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#8d6b38] py-2">Quotations by email</p>
            <h3 className="mt-4 font-['DM_Serif_Display'] text-3xl">Tell us about your property.</h3>
            <p className="mt-4 leading-relaxed text-[#292821]/70">For a quotation, email your pest issue, location, and the service you need.</p>
            <a href="mailto:pestcontrolanaymilpestcon@gmail.com" className="mt-7 inline-flex items-center gap-2 font-bold text-[#8d6b38]">
              <Mail size={18} />pestcontrolanaymilpestcon@gmail.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
