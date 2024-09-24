import React from 'react'
import { MdArrowForward } from 'react-icons/md';

export default function Hero() {
  return (
    <div className='flex flex-col sm:flex-row justify-center items-center gap-5 mt-6 lg:px-12'>

        <div className="w-1/2">
            <img src="/hero-image.png" alt="decor image" />
        </div>

        <div className="flex flex-col gap-6 w-4/5 lg:px-12">
            <h1 className="font-playfair italic text-dark-green text-6xl">unfolding the art of everyday life</h1>

            <p className="text-grey">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, expedita aut exercitationem saepe ex rem impedit consequatur 
                id. Praesentium numquam laborum facilis expedita placeat illum obcaecati voluptatibus autem est repellendus.</p>

            <div className="flex items-center gap-1 text-dark-green hover:text-med-green">
                <a href='#' className='text-lato uppercase text-xs'>Take me there</a>
                <MdArrowForward className="ml-2" />
            </div>
        </div>

    </div>
  )
}
