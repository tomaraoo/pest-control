import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "../lib/i18n"
import { translations } from "../lib/translations"

const BackToTop = () => {
  const { language } = useLanguage()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={translations[language].backToTop}
      className="back-to-top"
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default BackToTop
