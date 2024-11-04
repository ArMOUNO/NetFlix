import React, { useState } from 'react'
import Logo from '../assets/image/netflix.png'
import LoginModal from './LoginModal';

const NavBar = () => {
  const [showLogin,setShowLogin]= useState(false);

  const handleOpenLoginModal=()=>{
    setShowLogin(true);
  }
  const OnClose=()=>{
    setShowLogin(false);
  }

  return (
    <div className=" ">
      <div className='flex justify-around py-4 '>
        <img src={Logo} className='w-40' alt="" />
        <div>
          <button
          onClick={handleOpenLoginModal}
           className='bg-red-600 text-center rounded-sm text-white py-1 px-4'>Sign In</button>
        </div>
      </div>
      {showLogin && <LoginModal OnClose={OnClose}/> }
    </div>
  )
}

export default NavBar
