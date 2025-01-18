import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import  { Avatar, Button, Dropdown, DropdownDivider, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export default function Header() {

  const path = useLocation().pathname;
  const {currentUser} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const year = new Date().getFullYear();

  const handleSignOut = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <h1 className='text-7xl md:text-[110px] text-center font-playfair leading-[55px] md:leading-[80px] mb-10'>The Maya Joy Blog</h1>
      <Navbar className='bg-transparent text-black font-dm uppercase border-t border-b border-black mb-10 lg:mb-20'>
        <Link to='/'>
          <p className='text-xs'>Issue 1 {year}</p>
        </Link>

        <div className="flex gap-2 md:order-2">
          
          <form className='hidden lg:inline'>
            <TextInput className='text-xs' placeholder='Search...' rightIcon={AiOutlineSearch}></TextInput>
          </form>

          <Button className='w-12 h-10 lg:hidden inline' color='#114418' pill ><AiOutlineSearch /></Button>

          {/* Dynamically update the header with user data when a user is logged in */}
          {currentUser ? (
            <Dropdown
              arrowIcon={false}
              inline

              label={
                <Avatar 
                  alt='user avatar'
                  img={currentUser.profilePicture}
                  rounded
                />
              }
            >
              {/* Show user data in a dropdown menu */}
              <Dropdown.Header>
                <span className='block text-sm lowercase font-semibold text-dark-green'>@{currentUser.username}</span>
                <span className='block text-xs truncate lowercase'>{currentUser.email}</span>
              </Dropdown.Header>

              <Link to={'/dashboard?tab=profile'}>
                <Dropdown.Item>Profile</Dropdown.Item>
              </Link>

              <DropdownDivider />

              <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>

            </Dropdown>
          ):
          (
            // Show the Sign In button if user is not logged in
            <Link to='/sign-in'>
              <Button className='bg-dark-green hover:bg-dark-green hover:text-color-white' outline>Sign In</Button>
            </Link>
          )
          
        }  
        </div>
        <Navbar.Toggle></Navbar.Toggle>
    
        <Navbar.Collapse className='font-dm text-xs'>
          <Navbar.Link active={path === '/'} as={'div'}>
            <Link to='/'>Home</Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/about'} as={'div'}>
            <Link to='/about'>About</Link>
          </Navbar.Link>

          <Navbar.Link active={path === '/posts'} as={'div'}>
            <Link to='/posts'>Blog Posts</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
