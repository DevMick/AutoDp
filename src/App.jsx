import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Gallery from './components/Gallery'

import Contact from './components/Contact'
import FundReception from './components/FundReception'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />

        <Contact />
        <FundReception />
      </main>
      <Footer />
    </div>
  )
}

export default App
