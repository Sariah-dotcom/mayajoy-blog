import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import RecentPosts from '../components/RecentPosts'

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
        <Hero />
        <About />
        <RecentPosts />
    </div>
    
  )
}
