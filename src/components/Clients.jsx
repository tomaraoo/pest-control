import React from "react"
import c1 from "../assets/photos/c1.png"
import c2 from "../assets/photos/c2.png"
import c3 from "../assets/photos/c3.png"
import c4 from "../assets/photos/c4.png"

const clients = [
  { id: 1, img: c1 },
  { id: 2, img: c2 },
  { id: 3, img: c3 },
  { id: 4, img: c4 },
]

export const Clients = () => {
  return (
    <section className="overflow-hidden bg-[#f8f4ec] px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[.25em] text-[#8d6b38]">Trusted by</p>

          <h2 className="mt-4 font-['DM_Serif_Display'] text-4xl leading-none text-[#292821] sm:text-5xl lg:text-6xl">
            Our Clients
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#292821]/65 sm:text-base">
            Proud to provide reliable pest control services to homes, businesses, and organizations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-0 sm:grid-cols-4">
          {clients.map((client) => (
            <img
              key={client.id}
              src={client.img}
              alt=""
              className="block h-68 w-full object-cover brightness-[0.90] saturate-[0.80]"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
