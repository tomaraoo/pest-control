import dti from "../assets/dti.png"
import fda from "../assets/fda.webp"
import leads from "../assets/leads.png"
import r3pmap from "../assets/r3pmap.png"
import faopma from "../assets/faopma.png"
import p8 from "../assets/photos/p8.png"

const steps = [
  { label: "01 / INSPECT", text: "We identify pest activity, hiding places, and entry points." },
  { label: "02 / TREAT", text: "We apply a treatment suited to the pest and your property." },
  {
    label: "03 / PREVENT",
    text: "We help you take the next steps to prevent the problem from returning.",
  },
]

const images = [
  { id: 1, img: dti },
  { id: 2, img: fda },
  { id: 3, img: faopma },
  { id: 4, img: r3pmap },
  { id: 5, img: leads },
]

export default function Process() {
  return (
    <section id="approach" className="overflow-hidden bg-[var(--bg)]">
      <div className="grid lg:grid-cols-2">
        <div className="relative h-[350px] lg:h-auto lg:min-h-[650px]">
          <img
            src={p8}
            alt=""
            className="absolute inset-0 h-full w-full object-cover brightness-[0.90] saturate-[0.80]"
            fetchPriority="high"
          />
        </div>

        <div className="min-w-0 px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <div className="mx-auto max-w-2xl">
            <h2 className="font-['DM_Serif_Display'] text-4xl leading-[1.05] text-[#292821] sm:text-5xl lg:text-6xl">
              Our work starts with finding the source.
            </h2>

            <div className="mt-10 grid gap-8 sm:mt-12 sm:grid-cols-3 lg:gap-7">
              {steps.map((step) => (
                <div key={step.label} className="min-w-0">
                  <p className="text-sm font-bold text-[#8d6b38]">{step.label}</p>

                  <p className="mt-3 text-sm leading-relaxed text-[#292821]/80 sm:text-base">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative mt-14 w-full overflow-hidden sm:mt-16">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />

              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

              <div className="tech-strip flex w-max items-center gap-7 py-5 lg:gap-15">
                {images.map((image) => (
                  <div key={image.id} className="flex shrink-0 items-center">
                    <img
                      src={image.img}
                      alt=""
                      className={`h-[40px] object-contain ${
                        image.img === faopma ? "mix-blend-multiply" : ""
                      }`}
                      fetchPriority="high"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
