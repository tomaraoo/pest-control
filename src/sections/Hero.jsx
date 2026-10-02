import p1 from "../assets/p-1.jpg"

const alternative = "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;w=1400&amp;q=85"

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-24 pt-12 lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d6b38]">Bulakan, Bulacan</p>
        <h1 className="mt-6 font-['DM_Serif_Display'] text-6xl leading-[.92] sm:text-7xl">A peaceful home begins with reliable pest control.</h1>
        <p className="mt-7 max-w-lg text-lg leading-relaxed text-[#292821]/70">Milpestcon brings thorough inspection, targeted treatment, and practical prevention to homes and businesses.</p>
        <div className="mt-9 flex flex-col items-start gap-5">
          <p className="text-sm text-[#292821] uppercase font-bold">
            {/* Call first for fast service. Email is for quotations only. */}
            For fast service call us now.
          </p>
          <a href="tel:+639667085441" className="bg-[#8d6b38] px-6 py-4 text-xl font-bold text-white transition hover:bg-[#75572d]">
            Call us at (+63) 966-708-5441
          </a>
          <div className="flex lg:flex-row flex-col items-center gap-2 text-[#292821]/60 text-sm">
            <p className="">
              {/* Call first for fast service. Email is for quotations only. */}
              For quotation requests, please email us at
            </p>
            <a href="mailto:pestcontrolanaymilpestcon@gmail.com" className="font-bold underline underline-offset-4">
              pestcontrolanaymilpestcon@gmail.com
            </a>
          </div>
        </div>
      </div>
      {/* <img src={p1} alt="Comfortable home protected from pests" className="h-[360px] w-full object-cover sm:h-[510px]" fetchPriority="high" /> */}
      <img
        src={p1}
        alt="Comfortable home protected from pests" class="h-[510px] w-full object-cover rounded-sm shadow-lg" fetchPriority="high" />
    </section>
  )
}
