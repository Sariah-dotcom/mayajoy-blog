import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Sidebar } from 'flowbite-react';
import { HiArrowRight, HiDocumentText, HiUser } from 'react-icons/hi'
import { useDispatch } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';
import { useSelector } from 'react-redux';


export default function DashSideBar() {
  
  const location = useLocation();
  const [tab, setTab] = useState('');
  const dispatch = useDispatch();

  const {currentUser} = useSelector(state => state.user);

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

  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }

    }, [location.search]);
    
  return (
    <Sidebar className='w-full md:w-56'>
        <Sidebar.Items>
            <Sidebar.ItemGroup className='flex flex-col gap-1'>

                <Link to='/dashboard?tab=profile'>
                    <Sidebar.Item active={tab === 'profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin' : 'User'}>
                        Profile
                    </Sidebar.Item>
                </Link>

                {currentUser.isAdmin && (
                   <Link to='/dashboard?tab=posts'>
                   <Sidebar.Item
                     active={tab === 'posts'}
                     icon={HiDocumentText}
                     as='div'
                   >
                     Posts
                   </Sidebar.Item>
                 </Link>
                )}
               
                

                <Sidebar.Item onClick={handleSignOut} active icon={HiArrowRight} className='cursor-pointer'>
                    Sign Out
                </Sidebar.Item>

            </Sidebar.ItemGroup>
        </Sidebar.Items>
    </Sidebar>
  )
}
