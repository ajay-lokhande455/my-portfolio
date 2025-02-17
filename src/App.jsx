import React from 'react'
import Navbar from './component/Navbar'
import MainSection from './component/MainSection'
import Projects from './component/Projects'
import Skills from './component/Skills'
import Education from './component/Education'
import Contact from './component/Contact'
import About from './component/About'
import Footer from './component/Footer'

function App() {
  return (
    <div>
        <Navbar />
        <MainSection />
        <Projects />
        <About />
        <Skills />
        <Education />
        <Contact />
        <Footer />
        
    </div>
  )
}

export default App
