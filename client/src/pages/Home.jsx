import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'

export default function Home() {
  return (
    <div className="home flex flex-col gap-10">
        <Hero />
        <About />
    </div>
    
  )
}
