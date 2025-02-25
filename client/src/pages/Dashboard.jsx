import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DashSideBar from "../components/DashSideBar";
import DashProfile from "../components/DashProfile";
import DashPosts from '../components/DashPosts';
import DashUsers from '../components/DashUsers';
import DashComments from '../components/DashComments';
import DashboardComp from '../components/DashboardComp';


export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');

  useEffect(() =>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }

  }, [location.search]);

  return (
    <div className='min-h-screen flex flex-col md:flex-row md:gap-10 mt-10'>
      <div className='md:w-56'>
        {/* Sidebar */}
        <DashSideBar />
      </div>

      {/* Profile */}
      {tab === 'profile' && <DashProfile />}

      {/* Posts */}
      {tab === 'posts' && <DashPosts/> }

      {/* Users */}
      {tab === 'users' && <DashUsers /> }

      {/* Comments*/}
      {tab === 'comments' && <DashComments /> }

      {/* Dashboard Overview*/}
      {tab === 'dashOverview' && <DashboardComp/> }
    </div>
  )
}
