import React from 'react'

import MainSection from '../component/MainSection';
import Projects from '../component/Projects';
import Skills from '../component/Skills';
import Education from '../component/Education';
import Contact from '../component/Contact';
import About from '../component/About';



const HomePage = () => {
  return (
    <div>
      <MainSection />
      <Projects />
      <Skills />
      <Education />
      <About />
    <Contact />
    

    </div>
  )
}

export default HomePage
