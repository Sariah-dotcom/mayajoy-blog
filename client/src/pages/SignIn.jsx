import React, { useState } from 'react'
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';

export default function SignIn() {

  const [formData, setFormData] = useState({});
  const {loading, error:errorMessage} = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Track input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  // Handle form submission
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.email || !formData.password){
      return dispatch(signInFailure('Please fill out all fields.'));
    }

    try{
      dispatch(signInStart());

      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(data.success === false){
        dispatch(signInFailure(data.message));
      }

      //Navigate user to the home page if sign in is successful
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/ ');
      }

    } catch(error) {
      dispatch(signInFailure(data.message));
    }
  };

  return (
    <div>
      <div className='min-h-screen mt-20'>

        <div className="flex flex-col p-3 gap-10 max-w-3xl mx-auto md:flex-row md:items-center">
          {/* Left side */}
          <div className="p-5">
            <img src="/signs.jpg" alt="Street Signs" />
          </div>

          {/* Right side */}
          <div className="p-5 md:w-1/2">
            <h2 className='font-playfair text-5xl mb-5'>Sign In</h2>
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>

              <div className="flex flex-col gap-2 font-dm">
                <Label value='Email'/>
                <TextInput
                  type='email'
                  placeholder='janedoe@gmail.com'
                  id='email' onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2 font-dm">
                <Label value='Password'/>
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password' onChange={handleChange}
                />
              </div>
              <Button type='submit' className='bg-black font-dm' disabled={loading}>
                {
                  loading ? (
                    <>
                      <Spinner size='sm' />
                      <span className='pl-3'>Loading...</span>
                    </>
                  ) : 'Sign In'
                }
              </Button>
              <OAuth />
            </form>
            
            <div className="flex gap-2 mt-3 text-sm font-dm">
              <span>Don't have an account?</span>
              <Link to='/sign-up' className='text-med-green hover:text-dark-green'>Sign Up</Link>
            </div>

            {/* Display error message if fields are incomplete */}
            {
              errorMessage && (
                <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
              )
            }
        </div>
      </div>
    </div>
  </div>
  )
}
