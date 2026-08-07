import FacebookSection from "./sections/FacebookSecction"
import FooterSection from "./sections/FooterSection"
import HeroSection from "./sections/HeroSection"
import InstantBookingSection from "./sections/InstantBookingSection"
import ServicesSection from "./sections/ServicesSection"
import TestimonialsSection from "./sections/TestimonialsSection"
import WhyChooseUsSection from "./sections/WhyChooseUsSection"

function App() {
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
    </>
  )
}

export default App
