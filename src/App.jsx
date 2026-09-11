import React from 'react'
import AppHeader from './components/AppHeader'
import Hero from './sections/Hero'
import Why from './sections/Why'
import Services from './sections/Services'
import BackToTop from './components/BackToTop'
import Booking from './sections/Booking'
import Testimonials from './sections/Testimonials'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <div>
        {/* Navigation */}
        <AppHeader />

        <main className='lg:px-15 px-5'>
          <div className="lg:mt-0 mt-15">
            <Hero />
          </div>

          <div className="lg:mt-0 mt-15">
            <Why />
          </div>

          <div className="lg:mt-0 mt-15">
            <Services />
          </div>

          <div className="lg:mt-0 mt-15">
            <Booking />
          </div>


          <div className="lg:mt-0 mt-15">
            <Testimonials />
          </div>

        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  )
}

export default App