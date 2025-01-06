import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {

  useGSAP(()=>{
    gsap.fromTo(".hero-text", {
      opacity: 0,
      x: -100
    },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      stagger: 0.5
    });

    gsap.fromTo(".name-text", {
      opacity: 0,
      y: 100
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5
    },"<60%")
  });

  return (
    <section className='h-[60vh] flex flex-col items-center justify-center gap-5'>
      <div className='flex items-center justify-center px-5'>
        <div className='font-libre uppercase text-4xl lg:text-8xl text-dark-green'>
          <p className='hero-text'>Caputuring</p>
          <p className='hero-text'>the art of</p>
          <p className='hero-text'><span className='font-playfair italic lowercase'>everyday life</span></p>
        </div>

        <div>
          <h2 className='name-text text-xs uppercase font-semibold font-lato text-grey rotate-90'>Maya Abdoussala</h2>
        </div>
      </div>
    </section>
  )
}
