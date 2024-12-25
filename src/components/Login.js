import React, { useRef, useState } from 'react';
import Header from './Header';
import { ValidateForm } from '../utils/validate';
import {  createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL } from '../utils/constants';



const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState('');
  const [isTouched, setIsTouched] = useState(false); 

  const Fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch()

  const ToggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setErrMessage(''); 
  };

  const HandleButtonClick = (e) => {
    e.preventDefault(); 
    setIsTouched(true); 
    const res = ValidateForm(
      isSignIn ? null : Fullname.current.value,
      email.current.value, 
      password.current.value,
      isSignIn
    );
    setErrMessage(res);
    if(res) return;

    if(!isSignIn){
      //signup 
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
      )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth, {
      displayName: Fullname.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName} = auth.currentUser;
      dispatch(addUser({
        uid:uid,email:email,
        displayName:displayName,
      })
      );
    }).catch((error) => {
      // An error occurred
      setErrMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorCode+"-"+errorMessage)
    // ..
  });
    }
    else{
      //signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrMessage(errorMessage+"-"+errorCode)
  });



    }

  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="Background-logo"
        />
      </div>
      <form
        onSubmit={HandleButtonClick} 
        className="p-12 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-black rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">{isSignIn ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignIn && (
          <input
            ref={Fullname}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full rounded-lg bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full rounded-lg bg-gray-700"
        />
        {isTouched && errMessage && (
          <p className="text-red-700 font-bold text-lg py-2">{errMessage}</p>
        )}
        <button
          type="submit"
          className="py-4 my-6 bg-red-700 w-full rounded-lg font-bold text-xl hover:bg-red-800"
        >
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
        <p
          className="py-4 text-xl text-gray-400 cursor-pointer hover:underline hover:text-white"
          onClick={ToggleSignInForm}
        >
          {isSignIn ? 'New to Netflix? Sign Up Now' : 'Already have an account. Click here'}
        </p>
        {isSignIn && (
          <p className="text-gray-400">
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <span className="text-blue-800"> Learn more.</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
