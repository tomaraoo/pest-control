import { useState } from "react"
import { Menu, X } from "lucide-react"

import logo from "../assets/logo.png"

const links = [
  { id: "services", label: "Services" },
  { id: "approach", label: "Approach" },
  { id: "contact", label: "Contact" },
]

export default function AppHeader() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 px-6 py-6 bg-[#E8E3D9]">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" className="font-['DM_Serif_Display'] text-2xl flex items-center gap-3" aria-label="Milpestcon home">
          <img src={logo} alt="" className="size-10" />
          <div>Milpestcon <span className="text-[#8d6b38]">Pest Control</span></div>
        </a>

        <nav className="hidden gap-8 text-sm md:flex" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+639000000000" className="hidden text-sm font-bold text-[#8d6b38] md:inline border-2 border-[#8d6b38] p-3 rounded-sm hover:bg-[#292821] hover:text-[#f4f4f4] hover:border-[#292821]">
          CALL NOW
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className="mx-auto mt-6 flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-5 text-sm md:hidden"
          aria-label="Mobile navigation"
        >
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
            >
              {link.label}
            </a>
          ))}

          <a href="tel:+639000000000" onClick={close} className="font-bold text-[#8d6b38]">
            CALL NOW
          </a>
        </nav>
      )}
    </header>
  )
}