import React from 'react'
import Logo from '../assets/image/netflix.png'

const NavBar = () => {
  return (
    <div className=" ">
      <div className='flex justify-around py-4 '>
        <img src={Logo} className='w-40' alt="" />
        <div>
          <button className='bg-red-600 text-center rounded-sm text-white py-1 px-4'>Sign In</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar
