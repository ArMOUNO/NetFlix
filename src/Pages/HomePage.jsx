import React from 'react'
import NavBar from '../Components/NavBar'
import { Button, Input } from "@material-tailwind/react";

const HomePage = () => {
    return (
        <>


            <div className="customBg relative backdrop-blur-2xl"></div>

            <div className='absolute top-[10px] left-[50%] -translate-x-[50%] w-full'>
                <NavBar />
                <div className='flex flex-col justify-center items-center mt-40'>
                    <p className='md:text-6xl text-3xl text-white font-bold text-center  lg:w-[600px]'>Unlimited movies, TV shows, and more</p>
                    <p className='md:text-xl text-lg text-white font-bold text-center md:my-2'>Starts at USD 2.99. Cancel anytime.</p>
                    <p className='md:text-xl text-lg text-white  text-center mt-2 mb-2'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className=" flex md:flex-row flex-col mt-3 justify-center items-center space-x-2 space-y-2 md:space-y-0">
                        <Input color="red" label="Email Address" />
                        <Button color="red" className='md:w-48' >Get Started</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
