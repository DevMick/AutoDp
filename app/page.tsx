import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import FundReception from './components/FundReception'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
        <Contact />
        <FundReception />
      </main>
      <Footer />
    </div>
  )
}
