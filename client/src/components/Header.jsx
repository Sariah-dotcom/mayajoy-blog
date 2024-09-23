import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import  { Button, Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar>

      <Link to='/'>
        <img src="/mj-logo.png" alt="logo" className='h-32'/>
      </Link>

      <div className="flex gap-2 md:order-2">
        <form className='hidden lg:inline'>
          <TextInput placeholder='Search...' rightIcon={AiOutlineSearch}></TextInput>
        </form>

        <Button className='w-12 h-10 lg:hidden inline' color='#114418' pill ><AiOutlineSearch /></Button>

        <Link to='/sign-in'>
          <Button className='bg-dark-green hover:bg-dark-green hover:text-color-white' outline>Sign In</Button>
        </Link>
      </div>

      <Navbar.Toggle></Navbar.Toggle>
  
      <Navbar.Collapse className='font-lato text-dark-green'>
        <Navbar.Link active={path === '/'} as={'div'}>
          <Link to='/'>Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/about'} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>

        <Navbar.Link active={path === '/posts'} as={'div'}>
          <Link to='/posts'>Posts</Link>
        </Navbar.Link>

      </Navbar.Collapse>

    </Navbar>
  )
}
