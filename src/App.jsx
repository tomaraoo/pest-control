import { useEffect, useState } from "react"
import FacebookSection from "./sections/FacebookSecction"
import FooterSection from "./sections/FooterSection"
import HeroSection from "./sections/HeroSection"
import InstantBookingSection from "./sections/InstantBookingSection"
import ServicesSection from "./sections/ServicesSection"
import TestimonialsSection from "./sections/TestimonialsSection"
import WhyChooseUsSection from "./sections/WhyChooseUsSection"
import { ArrowUp01Icon } from "lucide-react"
import { ArrowUp } from "lucide-react"

function App() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const sections = document.querySelectorAll("section")

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    sections.forEach((section) => {
      section.classList.add("section-reveal")
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 360)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <div>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <InstantBookingSection />
        <TestimonialsSection />
        <FacebookSection />
        {/* footer */}
        <FooterSection />
      </div>

      <button
        type="button"
        onClick={scrollToTop}
        className={`scroll-top-button ${showTopButton ? "visible" : ""}`}
        aria-label="Return to top"
      >
        <ArrowUp />
      </button>
    </>
  )
}

export default App
