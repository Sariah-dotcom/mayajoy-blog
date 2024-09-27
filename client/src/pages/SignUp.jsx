import React from 'react'
import Header from '../components/Header.jsx';
import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  return (
    <div>
      <Header />
      <div className='min-h-screen mt-20'>

        <div className="flex flex-col p-3 gap-10 max-w-3xl mx-auto md:flex-row md:items-center">
          {/* left side */}
          <div className="p-5">
            <h1 className='font-playfair italic text-dark-green font-semibold text-6xl mb-5'>themayajoy blog</h1>
            <p>Here is holy 🤍</p>
          </div>

          {/* right side */}
          <div className="p-5 md:w-1/2">
            <form className='flex flex-col gap-5'>
              <div className="flex flex-col gap-2">
                <Label value='Your Username' className='text-dark-green'/>
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username'
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label value='Email' className='text-dark-green'/>
                <TextInput
                  type='email'
                  placeholder='janedoe@gmail.com'
                  id='email'
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label value='Password' className='text-dark-green'/>
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password'
                />
              </div>
              <Button type='submit' className='bg-med-green'>Sign Up</Button>
            </form>
            <div className="flex gap-2 mt-3 text-sm">
              <span>Have an account?</span>
              <Link to='/sign-in' className='text-med-green hover:text-dark-green'>Sign In</Link>
            </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}
