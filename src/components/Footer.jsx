import React from 'react'
import easylogo from '../assets/easylogo.png'
import mail from '../assets/mailicon.png'
import call from '../assets/call.png'
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'


const Footer = () => {
    const midnav = [
        {
          id: 1,
          title: "Home",
          
        },
        {
          id: 2,
          title: "careers",
          
        },
        {
          id: 3,
          title: "about",
          
        },
        {
          id: 4,
          title: "security",
          
        }
      ];
  return (
    <div className="mx-6 md:mx-24 p-4 md:p-10">
      <div className="flex flex-col justify-center items-center gap-8">
        <div>
          <img src={easylogo} alt="logo" />
        </div>
        <div className="flex flex-row justify-between w-[323px] text-[#E4E7E7]">
          {midnav.map(({ id, title }) => (
            <ul key={id}>
              <li>
                <button>{title}</button>
              </li>
            </ul>
          ))}
        </div>
        <hr className="border-1 border-[#262626] w-full m-8" />
      </div>
        <div className="text-white md:text-base text-sm flex flex-wrap md:flex-nowrap items-center justify-center md:w-content gap-5 md:gap-5p ">
            <div className='flex md:flex-wrap flex-row gap-5'>
          <div className="flex flex-row">
            <img src={mail} alt="" srcset="" />
            <p>shafboi@gmail.com</p>
          </div>
          <div className="flex flex-row">
            <img src={call} alt="" srcset="" />
            <p>08067854387</p>
          </div>
          </div>
          <div className="flex flex-row">
            <img src={mail} alt="" srcset="" />
            <p>shafboi@gmail.com</p>
          </div>
        
      </div>
      <div>
        <hr className="border-1 my-6 border-[#262626]" />
      </div>
      <div className='text-white'>
        <div className=" md:rounded-full rounded-lg flex md:flex-row flex-col justify-between md:gap-0 
        md:items-start items-center gap-4 border-2 bg-[#1A1A1A] border-[#262626] p-3">
          <div className="flex flex-row md:justify-between justify-center items-center md:w-1/12 md:gap-2 gap-2 ">
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={linkedin} alt="" srcset="" />
            </div>
            <div>
              <img src={facebook} alt="" srcset="" />
            </div>
          </div>
          <div>
            <p>Your Bank All Rights Reserved</p>
          </div>
          <div className='flex flex-row justify-between gap-1'>
            <div>
                <p>Privacy Policy</p>
            </div>
            <div>
            |
            </div>
            <div>
                <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer