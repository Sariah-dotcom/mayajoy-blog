import React from 'react'

export default function About() {
  return (
    <section className='flex flex-col lg:flex-row border-t border-black pt-10 gap-5'>
       
      <div className='flex gap-5 lg:w-1/2'>
        <div className='w-72 h-72'>
          <img className='object-cover h-72' src="/bento-3.jpg" alt="" />
        </div>
        <div className='w-72 h-72'>
          <img className='object-cover h-72' src="/maya-1.jpg" alt="" />
        </div>
      </div>

       <div className='lg:w-1/2'>
          <h2 className='text-4xl font-playfair mb-5'>Who is she?</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium molestias, 
            facilis nemo corrupti non vitae, adipisci recusandae cum nesciunt fugit a voluptatem
            eum vero distinctio saepe mollitia ea, dolorum inventore mollitia eac
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ullam non molestias. 
            Rerum dolorum sequi recusandae sed voluptatum magnam aliquid, accusantium in. Ad dignissimos
            ipsum officia reiciendis perferendis necessitatibus repudiandae!
          </p>
       </div>
    </section>
  )
}
