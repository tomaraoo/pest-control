import AppHeader from "./components/AppHeader"
import BackToTop from "./components/BackToTop"
import Hero from "./sections/Hero"
import Services from "./sections/Services"
import Process from "./sections/Process"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <>
      <AppHeader />
      <main id="home">
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
