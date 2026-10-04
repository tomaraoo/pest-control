import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

const BackToTop = () => {
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
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-2 grid h-11 w-11 place-items-center rounded-full border-0 bg-[#f4f4f4] text-[#292821] shadow-lg transition hover:-translate-y-1 cursor-pointer"
    >
      <ArrowUp size={18} />
    </button>
  )
}

export default BackToTop
