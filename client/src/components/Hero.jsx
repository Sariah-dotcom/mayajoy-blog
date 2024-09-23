import React from 'react'
import { MdArrowForward } from 'react-icons/md';

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center mt-12'>
      <div className="img-container flex w-1/2 pl-12 justify-center">
        <img src="/guadeloupe.jpeg" alt="guadeloupe" className='h-96'/>
        <div className="absolute border-8 border-white h-74 mt-12 ml-32">
            <img src="/stitch-braids.jpeg" alt="" className='h-72'/>
        </div>
      </div>

      <div className="flex flex-col justify-center w-1/2 gap-6 px-16">
        <h1 className='font-playfair italic text-dark-green text-6xl'>unfolding the art in everyday life</h1>
        <p className='font-lato text-grey pr-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum, enim eget vestibulum condimentum, leo ipsum iaculis sapien,
             ac vehicula leo diam fermentum lectus. Donec consequat velit in arcu placerat rutrum.
        </p>
        <div className="flex items-center gap-1 text-dark-green hover:text-med-green">
            <a href='#' className='text-lato uppercase text-xs'>Take me there</a>
            <MdArrowForward className="ml-2" />
        </div>

      </div>
    </div>
  )
}
