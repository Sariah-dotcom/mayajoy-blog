import React from 'react'
import { useSelector } from 'react-redux'
import { Button, TextInput } from 'flowbite-react'

export default function DashProfile() {
    const {currentUser} = useSelector(state => state.user)
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-playfair italic text-dark-green text-4xl font-semibold'>Profile</h1>
      
      <form className='flex flex-col gap-5'>
        <div className='h-32 w-32 rounded-full self-center overflow-hidden shadow-lg'>
            <img src={currentUser.profilePicture} alt="use image"  className='rounded-full w-full h-full object-cover border-8 border-dark-green'/>
        </div>

        <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username}/>
        <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email} />
        <TextInput type='password' id='password' placeholder='Password' defaultValue='**********'/>

        <Button type='submit' className='bg-dark-green font-lato font-bold'>Update</Button>


      </form>
      <div className='text-red-500 flex justify-between mt-8 font-lato font-semibold'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
