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
      <img className='lg:px-[10rem] mt-[8rem]' src="/hero-title.png" alt="maya joy blog" />
      
      <div className='flex justify-between items-center'>
        <div className='lg:w-1/2 flex flex-col gap-5 pr-5'>
          <p className='font-xs italic font-bold'>11th May 2025</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem eum vero distinctio saepe mollitia ea, dolorum inventore mollitia eac</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem eum vero distinctio saepe mollitia ea, dolorum inventore?</p>
        </div>
        
        <div className='hidden lg:inline w-1/2 flex flex-col gap-5 pr-5'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem eum vero distinctio saepe mollitia ea, dolorum inventore mollitia eac</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem eum vero distinctio saepe mollitia ea, dolorum inventore?</p>
        </div>
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
