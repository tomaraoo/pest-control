import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import logo from "../assets/logo.png"
import { scrollToSection } from "../lib/constants"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

export default function AppHeader() {
  const { language, setLanguage } = useLanguage()
  const copy = translations[language].nav
  const links = [
    { id: "why-us", label: copy.why },
    { id: "services", label: copy.services },
    { id: "process", label: copy.process },
    { id: "faq", label: copy.faq },
  ]
  const [open, setOpen] = useState(false)
  const root = useRef(null)
  const menuButton = useRef(null)
  useEffect(() => {
    function dismiss(event) {
      if (event.key === "Escape") {
        setOpen(false)
        menuButton.current?.focus()
      }
      if (event.type === "pointerdown" && !root.current?.contains(event.target)) setOpen(false)
    }
    const desktop = window.matchMedia("(min-width: 1024px)")
    const resize = () => {
      if (desktop.matches) setOpen(false)
    }
    document.addEventListener("keydown", dismiss)
    document.addEventListener("pointerdown", dismiss)
    desktop.addEventListener("change", resize)
    return () => {
      document.removeEventListener("keydown", dismiss)
      document.removeEventListener("pointerdown", dismiss)
      desktop.removeEventListener("change", resize)
    }
  }, [])

  function go(id) {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header ref={root} className="site-header">
      <div className="header-inner">
        <a href="/" className="brand" aria-label="Milpestcon home">
          <img src={logo} alt="" />
          <span>
            <strong>MILPESTCON</strong>
            <small>ANAY & PEST CONTROL</small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label={copy.main}>
          {links.map((link) => (
            <button key={link.id} type="button" onClick={() => go(link.id)}>
              {link.label}
            </button>
          ))}
        </nav>
        <div className="language-switch" role="group" aria-label="Language / Wika">
          <button
            type="button"
            className={language === "en" ? "active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
            title="English (United States)"
          >
            US
          </button>
          <button
            type="button"
            className={language === "fil" ? "active" : ""}
            onClick={() => setLanguage("fil")}
            aria-pressed={language === "fil"}
            title="Filipino (Philippines)"
          >
            PH
          </button>
        </div>
        <button
          type="button"
          className="button button-primary header-cta"
          onClick={() => go("contact")}
        >
          {copy.contact}
          <ArrowUpRight size={16} />
        </button>
        <button
          ref={menuButton}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={open ? "mobile-navigation" : undefined}
          aria-label={open ? copy.close : copy.open}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label={copy.mobile}>
          {links.map((link) => (
            <button key={link.id} type="button" onClick={() => go(link.id)}>
              {link.label}
              <ArrowUpRight size={16} />
            </button>
          ))}
          <button type="button" className="button button-primary" onClick={() => go("contact")}>
            {copy.contact}
            <ArrowUpRight size={16} />
          </button>
        </nav>
      )}
    </header>
  )
}
