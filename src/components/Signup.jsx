import React, { useState } from 'react';
import google from '../assets/Icon.png'
import face from '../assets/face.png'
import apple from '../assets/apple.png'

const Signup = () => {

    const socials = [
        {
            id:1,
            src: google,
            style:"rounded-full w-96 h-96"
        },
        {
            id:2,
            src: face
        },
        {
            id:1,
            src: apple
        }
    ];
  return (

   
    <div className='bg-[#1C1C1C] flex justify-center p-20 '>
        <div className='rounded-lg border-2 border-[#262626] p-12 w-fit'>
            <div className='flex flex-col items-center justify-between gap-8'>
                <h1 class='font-Lexend font-medium text-5xl text-orange '>Sign Up</h1>
                <p class="font-Lexend text-[#BFBFBF]">Join our Community today!
                    Create an account to unlock exclusive features
                    and personalised experiences
                </p>

            </div>
            <div>
            <div class="flex flex-col justify-between items-center gap-6 p-12 bg-[#1C1C1C] mx-auto" >
                <div className='flex flex-row gap-6'>
                    <input class="rounded-full border-1 border-[#262626] w-96 p-4
                    bg-[#262626] text-[#59595A] " type="text" placeholder='Enter First Name' />
                    <input class="rounded-full w-96 p-4
                    bg-[#262626] text-[#59595A]" type="text" placeholder='Enter Last name' />
                </div>
                <div className='flex flex-row gap-4'>
                    <input class="rounded-full w-96 p-4
                    bg-[#262626] text-[#59595A]" type="text" placeholder='Enter First Name' />
                    <input class="rounded-full w-96 p-4
                    bg-[#262626] text-[#59595A]" type="text" placeholder='Enter Last name' />
                </div>
            </div>

                <div className='p-5'>

                    <div className='flex flex-col justify-between gap-5 items-center'>
                        <button className='rounded-full border-1 border-[#262626] w-96 p-4
                    bg-orange text-white'>Sign Up</button>
                        <button className='rounded-full border-1 border-[#262626] w-96 p-4
                    bg-[#333333] text-white'>Login</button>
                    </div>

                    <div className='flex flex-row justify-center m-6'>
                        <hr className=' w-48  border-1 bg-[#B3B3B3] m-3' />
                        <p className='text-[#B3B3B3]'>Or Continue with</p>
                        <hr  className=' w-48 border-1 bg-[#B3B3B3] m-3'/>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                <div className=' flex items-center justify-between w-48'>
               
               { socials.map(({id,src}) => (
                <div key={id}>
                    <img src={src} alt="" />
                </div>
               

                ))}
                
              
                </div>
                </div>
                </div>

            
        </div>
    </div>
  )
}

export default Signup