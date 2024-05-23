import React, { useState } from 'react';
import easylogo from '../assets/easylogo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const midnav = [
    {
      id: 1,
      title: "Home",
      style: "text-orange rounded-md",
    },
    {
      id: 2,
      title: "careers",
      style: "text-white"
    },
    {
      id: 3,
      title: "about",
      style: "text-white"
    },
    {
      id: 4,
      title: "security",
      style: "text-white"
    }
  ];

  return (
    <div className='bg-[#1C1C1C] py-6 px-4 '>
      <div className='m-auto max-w-screen-xl'> 
        <div className="bg-zinc-900 px-10 rounded-full mx-auto flex flex-row justify-between items-center overflow-hidden h-20">
          <div style={{ width: '137.88px', height: '75.26px' }}>
             <img src={easylogo} className='w-full h-full' alt="" />
          </div>
          <div className='flex flex-row justify-between w-[323px]'>
            {midnav.map(({ id, title, style }) => (
              <ul key={id}>
                <li className={style}><button>{title}</button></li>
              </ul>
            ))}
          </div>
          <div className='flex flex-row justify-between items-center' style={{ width: '208px', height: '55px', gap: '30px' }}>
            <ul>
              <li className='text-white'><button>Sign Up</button></li>
            </ul>
            <ul>
              <li className='text-white '>
                <button className='rounded-full bg-orange text-sm px-5 py-1 text-center me-2 mb-2'>Login</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
