import React from 'react'
import WelcomePage from './WelcomePage'
import Skills from './Skills'
import About from './About'
import Hero from './Hero'
import Testimonials from './Testimonials'
import Blog from './Blog'
import Contact from './Contact'
import Resume from './Resume'
import GlassmorphismParallax from './GlassmorphismParallax'
import HireMe from './HireMe'

function Home() {
  return (
    <>
     <WelcomePage/> 
     <Skills/>
     <About/>
     <Hero/>
     <Testimonials/>
     <Blog/>
     <Contact/>
     <Resume/>
     <GlassmorphismParallax/>
     <HireMe/>
    </>
  )
}

export default Home
