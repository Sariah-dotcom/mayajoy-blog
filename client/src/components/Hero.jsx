import React from 'react'
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Hero() {
  return (
    <div className='flex justify-center px-5 py-32 lg:py-16'>
       <div className='font-playfair italic text-6xl font-bold text-dark-green flex flex-col lg:text-8xl items-center'>
          <h1>unfolding the</h1>
          
          <div className='flex items-center gap-3'>
            <h1>art</h1>
            <img src="/gwada-2.png" alt="" />
            <h1>of</h1>
          </div>
          
          <div className='flex items-center gap-3'>
            <h1>everyday</h1>
            <img src="/braids.png" alt="" />
          </div>
          
          <h1>life.</h1>
          <IoIosArrowRoundDown  className='-ml-6 mt-10 lg:mt-4 lg:text-6xl'/>
       </div>
    </div>
  )
}
