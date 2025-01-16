import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {

  // useGSAP(()=>{
  //   gsap.fromTo(".hero-text", {
  //     opacity: 0,
  //     x: -100
  //   },
  //   {
  //     opacity: 1,
  //     x: 0,
  //     duration: 1,
  //     stagger: 0.5
  //   });

  //   gsap.fromTo(".name-text", {
  //     opacity: 0,
  //     y: 100
  //   },
  //   {
  //     opacity: 1,
  //     y: 0,
  //     duration: 0.5
  //   },"<60%")
  // });

  return (
    <section className='flex flex-col gap-10'>
      <div>
        <h1 className='text-center uppercase font-libre text-6xl py-5 lg:text-8xl'>The Maya Joy Blog</h1>
        <hr className='border-black' />
      </div>

      <div className='lg:w-1/2 flex flex-col gap-5'>
        <h1 className='font-libre text-4xl'>Capturing the art <br /> of everyday life</h1>
        <p className='font-xs italic font-bold'>11th May 2025</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem eum vero distinctio saepe mollitia ea, dolorum inventore?</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem eum vero distinctio saepe mollitia ea, dolorum inventore?</p>
      </div>
    </section>
    // <section className='h-[60vh] flex flex-col items-center justify-center gap-5'>
    //   <div className='flex items-center justify-center px-5 z-10'>
    //     <div className='font-libre uppercase text-4xl lg:text-8xl'>
    //       <p className='hero-text'>Caputuring</p>
    //       <p className='hero-text'>the art of</p>
    //       <p className='hero-text'><span className='font-playfair italic lowercase'>everyday life</span></p>
    //     </div>

    //     <div>
    //       <h2 className='name-text text-xs uppercase font-semibold font-lato text-grey rotate-90'>Maya Abdoussala</h2>
    //     </div>
    //   </div>
    //   <div className='absolute'>
    //     <img className='h-[30rem] opacity-50' src="maya.jpg" alt="" />
    //   </div>
    // </section>
  )
}
