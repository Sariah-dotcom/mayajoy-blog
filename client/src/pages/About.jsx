import React from 'react'

export default function About() {
  return (
    <div className='flex flex-col items-center gap-5'>
      <h2 className='font-playfair text-4xl mb-3'>About Me</h2>
      <div className='flex gap-3'>
        <img className='w-24 md:w-36 lg:w-72 mt-3 grayscale' src="https://i.pinimg.com/474x/39/ca/4e/39ca4e04d501a1e48db715903c9c13f6.jpg" alt="New York" />
        <img className='w-24 md:w-36 lg:w-72 object-cover shadow-md' src="https://i.pinimg.com/736x/d6/07/ed/d607edc8f7a8fe8e1e883b94856cde3a.jpg" alt="Maya" />
        <img className='w-24 md:w-36 lg:w-72 mt-3' src="https://i.pinimg.com/236x/3a/90/50/3a905074d7170f91236f7765fb310c7d.jpg" alt="Hotel" />
      </div>

      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis tincidunt ligula eget consectetur. Morbi mollis, urna sit amet sodales tincidunt, massa felis mollis velit, eu pharetra arcu quam eu sem. Duis sed nisl diam. Curabitur lacus tellus, pretium quis venenatis eu, tempor feugiat nunc. Proin ullamcorper arcu id sagittis tincidunt. Pellentesque aliquam nibh in dui consectetur venenatis. Nunc eu lacus auctor, scelerisque augue quis, suscipit turpis. Donec ut odio porta, ullamcorper ligula sit amet, vulputate quam. Morbi mollis turpis eget pulvinar tristique. Etiam dolor nulla, cursus id massa posuere, ornare cursus arcu. Nunc eu dolor ac ex feugiat elementum. Maecenas pharetra leo et mi fermentum, sed malesuada tellus tincidunt. Aenean consequat semper purus, sit amet hendrerit orci malesuada ut. Donec purus lorem, pharetra ut semper vel, maximus dignissim dolor. Nulla sodales, elit id faucibus posuere, lectus lectus bibendum ante, id mattis ante sem in sapien.
      </p>
    </div>
  )
}
