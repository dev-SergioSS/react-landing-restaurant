import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/Navbar'
import { Dishes } from './components/Dishes'
import { About } from './components/About'
import { Mission } from './components/Mission'
import { Expertise } from './components/Expertise'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'
import { Reviews } from './components/Reviews'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Reviews />
      <Contacts />
      <Footer />
    </>
  )
}
