import dti from "../assets/dti.png"
import fda from "../assets/fda.webp"
import leads from "../assets/leads.png"
import r3pmap from "../assets/r3pmap.png"

const steps = [
  { label: "01 / INSPECT", text: "We identify pest activity, hiding places, and entry points." },
  { label: "02 / TREAT", text: "We apply a treatment suited to the pest and your property." },
  { label: "03 / PREVENT", text: "We help you take the next steps to prevent the problem from returning." },
]

const images = [
  { id: 1, img: dti },
  { id: 2, img: fda },
  { id: 3, img: leads },
  { id: 4, img: r3pmap },
]

export default function Process() {
  return (
    <section id="approach" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <h2 className="font-['DM_Serif_Display'] text-5xl leading-none">Our work starts with finding the source.</h2>
        <div className="grid gap-7 sm:grid-cols-3">
          {steps.map((step) => <div key={step.label}>
            <p className="text-sm font-bold text-[#8d6b38]">{step.label}</p>
            <p className="mt-3 leading-relaxed text-[#292821]/70">{step.text}</p>
          </div>)}
        </div>
      </div>

      {/* <div className="tech-strip flex w-max gap-12 py-5 ">
        {images.map((image) =>
          <div key={image.id} className="">
            <img src={image.img} alt="" className="h-[150px] object-cover" fetchPriority="high" />
          </div>
        )}
      </div> */}

      <div className="relative mt-5 w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--bg)] to-transparent" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <div className="tech-strip flex w-max lg:gap-25 gap-15 py-5 mt-25">
          {images.map((image) => (
            <div key={image.id} className="shrink-0">
              <div className="flex items-center">
                <img
                  src={image.img}
                  alt=""
                  className="lg:h-[100px] h-[70px] object-cover"
                  fetchPriority="high"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
