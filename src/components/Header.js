/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {


  const navigate = useNavigate()
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch()

  

  const handleSignOut= ()=>{
    signOut(auth)
    .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate('/error');
    });

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          const {uid,email,displayName} = user;
          dispatch(
            addUser({
                uid:uid,email:
                email,
                displayName:displayName
              })
            );
            navigate("/browse")
          
        } else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });

      return () => unsubscribe(); //unsubscribe when component unmounts
}, [])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10  w-screen flex justify-between'>
        <img className='w-44 ' src = {LOGO}
        alt='logo'
        />  

        {user &&  (<div>
        
          <button onClick={handleSignOut} className='p-3 my-4 font-bold text-white bg-red-900 rounded-md shadow-lg'>Sign Out</button>
        </div>
        )}
    </div>  
        
  )
}

export default Header