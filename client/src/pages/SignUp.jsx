import React, { useState } from 'react'
import Header from '../components/Header.jsx';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Track input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  }

  // Handle form submission
  const handleSubmit = async (e) =>{
    e.preventDefault();

    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessage('Please complete all fields.');
    }

    try{
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if(data.success === false){
        setErrorMessage(data.message);
      }

      //Navigate user to sign in page if sign up is successful
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }

    } catch(error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <div className='min-h-screen mt-20'>

        <div className="flex flex-col p-3 gap-10 max-w-3xl mx-auto md:flex-row md:items-center">
          {/* Left side */}
          <div className="p-5">
            <h1 className='font-playfair italic text-dark-green font-semibold text-6xl mb-5'>themayajoy blog</h1>
            <p>Here is holy 🤍</p>
          </div>

          {/* Right side */}
          <div className="p-5 md:w-1/2">
            <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <Label value='Username' className='text-dark-green'/>
                <TextInput
                  type='text'
                  placeholder='Username'
                  id='username' onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label value='Email' className='text-dark-green'/>
                <TextInput
                  type='email'
                  placeholder='janedoe@gmail.com'
                  id='email' onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label value='Password' className='text-dark-green'/>
                <TextInput
                  type='password'
                  placeholder='Password'
                  id='password' onChange={handleChange}
                />
              </div>
              <Button type='submit' className='bg-med-green' disabled={loading}>
                {
                  loading ? (
                    <>
                      <Spinner size='sm' />
                      <span className='pl-3'>Loading...</span>
                    </>
                  ) : 'Sign Up'
                }
              </Button>
            </form>
            
            <div className="flex gap-2 mt-3 text-sm">
              <span>Have an account?</span>
              <Link to='/sign-in' className='text-med-green hover:text-dark-green'>Sign In</Link>
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
