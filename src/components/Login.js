import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true);

  const ToggleSignInForm = () =>{
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
        <Header/>
        <div className='absolute' >
        <img  src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/US-en-20241216-TRIFECTA-perspective_16158377-32b2-42cc-ba71-15929be7d1f2_medium.jpg" 
         alt ='Background-logo'
         />
        </div>
        <form className='p-12  absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-black rounded-md bg-opacity-80' >
          <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
          <input type='text' placeholder='Full Name' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>)}
          <input type='text' placeholder='Email address' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
          <button className='py-4 my-6 bg-red-700 w-full rounded-lg font-bold text-xl hover:bg-red-800'>{isSignIn ? "Sign In" : "Sign Up"}</button>
          <p className='py-4 text-xl text-gray-400 cursor-pointer hover:underline hover:text-white ' onClick={ToggleSignInForm}>{isSignIn ? 'New to Netflix? Sign Up Now' : 'Already have an account.Click here'}</p>
          {isSignIn && (
          <p className='text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span className='text-blue-800'>Learn more.</span> </p>)}
        </form>
    </div>
  )
}

export default Login