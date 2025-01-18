import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {

  const currentDate = (() => {
    const now = new Date();
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return now.toLocaleDateString('en-GB', options).replace(',', '');
  })();

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
      <div className='flex flex-col-reverse lg:flex-row gap-10 justify-between'>
        
        <div className='lg:w-1/2 flex flex-col gap-5 pr-5'>
          <h1 className='font-playfair text-4xl'>Capturing the art of everyday life</h1>
          <p className='font-xs italic font-bold'>{currentDate}</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, 
            facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem
            eum vero distinctio saepe mollitia ea, dolorum inventore mollitia eac
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam non molestias. 
            Rerum dolorum sequi recusandae sed voluptatum magnam aliquid, accusantium in. Ad dignissimos
            ipsum officia reiciendis perferendis necessitatibus repudiandae!
          </p>

          <p className='hidden md:inline'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, 
            facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem
            eum vero distinctio saepe mollitia ea, dolorum inventore mollitia eac
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam non molestias. 
            Rerum dolorum sequi recusandae sed voluptatum magnam aliquid, accusantium in. Ad dignissimos
            ipsum officia reiciendis perferendis necessitatibus repudiandae!
          </p>
        </div>
        
        <img className='lg:w-1/2 object-cover' src="/maya-2.jpg" alt="" />
      </div>
    </section>
  )
}
