import { useEffect } from 'react'
import { globalStyles } from './styles'
import Navbar from './components/Navbar'

import StatsBar from './components/StatsBar'
import About from './components/About'
import Programs from './components/Programs'
import Schedule from './components/Schedule'
import Coaches from './components/Coaches'
import Carousel from './components/Carousel'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function IronforgeGym() {
  useEffect(() => {
    const style = document.createElement('style')
    style.setAttribute('data-ironforge', 'true')
    style.innerHTML = globalStyles
    document.head.appendChild(style)
    return () => {
      const el = document.head.querySelector('[data-ironforge]')
      if (el) document.head.removeChild(el)
    }
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Carousel />
        <StatsBar />
        <About />
        <Programs />
        <Schedule />
        <Coaches />
        <Testimonials />
        <Pricing />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
