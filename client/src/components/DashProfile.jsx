import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, TextInput } from 'flowbite-react'
import { updateStart, updateSuccess, updateFailure, signoutSuccess } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link} from 'react-router-dom';

export default function DashProfile() {
    const {currentUser} = useSelector((state) => state.user);
    const [formData, setFormData] = useState({});

    const dispatch = useDispatch();

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

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

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (Object.keys(formData).length === 0) {
        setUpdateUserError('No changes made');
        return;
      }
      try {
        dispatch(updateStart());
        const res = await fetch(`/api/user/update/${currentUser._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) {
          dispatch(updateFailure(data.message));
        } else {
          dispatch(updateSuccess(data));
        }
      } catch (error) {
        dispatch(updateFailure(error.message));
      }
    }
  
  return (
    <div className='max-w-lg mx-auto p-3 w-full'>
      <h1 className='my-7 text-center font-playfair italic text-dark-green text-4xl font-semibold'>Profile</h1>
      
      {/* Form to update user profiles */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <div className='h-32 w-32 rounded-full self-center overflow-hidden shadow-lg'>
            <img src={currentUser.profilePicture} alt="use image"  className='rounded-full w-full h-full object-cover border-8 border-dark-green'/>
        </div>

        <TextInput type='text' id='username' placeholder='Username' defaultValue={currentUser.username} onChange={handleChange}/>
        <TextInput type='email' id='email' placeholder='Email' defaultValue={currentUser.email} onChange={handleChange} />
        <TextInput type='password' id='password' placeholder='Password' defaultValue='**********' onChange={handleChange}/>

        <Button type='submit' className='bg-dark-green font-lato font-bold'>Update</Button>

        {/* Display 'Create a Post' button only is the user is an admin */}
        {
          currentUser.isAdmin && (
            <Link to='/create-post'>
              <Button
              type='button'
              className='w-full'
              outline
              > 
              Create a Post
              </Button>
            </Link>
          )
        }
      </form>

      <div className='text-red-500 flex justify-between mt-8 font-lato font-semibold'>
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer' onClick={handleSignOut}>Sign Out</span>
      </div>
    </div>
  )
}
