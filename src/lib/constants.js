export const SERVICES = [
  "Anay Treatment",
  "Langgam Control",
  "Langaw Control",
  "Ipis Control",
  "Bukbok Treatment",
  "Garapata Control",
  "Other pest treatment",
]

export function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    block: "start",
  })
}
