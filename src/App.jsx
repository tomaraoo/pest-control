import AppHeader from "./components/AppHeader"
import BackToTop from "./components/BackToTop"
import Hero from "./sections/Hero"
import Why from "./sections/Why"
import Credentials from "./sections/Credentials"
import Services from "./sections/Services"
import Process from "./sections/Process"
import Contact from "./sections/Contact"
import Faq from "./sections/Faq"
import Footer from "./sections/Footer"

export default function App() {
  return (
    <>
      <AppHeader />
      <main id="main-content">
        <Hero />
        <Why />
        <Credentials />
        <Services />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
