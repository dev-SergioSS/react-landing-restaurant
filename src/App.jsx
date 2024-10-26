import React from 'react'
import { HeroSection } from './components/HeroSection'
import { Navbar } from './components/navbar'
import { Dishes } from './components/Dishes'

export default function App(props) {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Dishes />
    </>
  )
}
