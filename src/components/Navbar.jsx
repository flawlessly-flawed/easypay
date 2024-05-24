import React, { useState } from 'react';
import easylogo from '../assets/easylogo.png';
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

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
    <div className='bg-[#1C1C1C] md:p-8 p-4'>
      <div className='md:m-8 m-4'> 
        <div className="border-2 bg-[#1C1C1C] border-[#262626] px-5 md:px-10 rounded-full flex flex-row justify-between items-center">
          <div className='flex-shrink-0'>
             <img src={easylogo} className='w-1/4 md:w-auto md:h-auto'  alt="" />
          </div>
          <div className='hidden md:flex justify-between items-center gap-5'>
            {midnav.map(({ id, title, style }) => (
              <ul key={id}>
                <li className={style}><button>{title}</button></li>
              </ul>
            ))}
          </div>
          <div className='hidden md:flex items-center space-x-4'>
          <button className='text-white'>Sign Up</button>
          <button className='rounded-full bg-orange text-sm px-5 py-1 text-center'>Login</button>
        </div>
          <div onClick={() => setNav(!nav)} className='md:hidden flex items-center z-10 text-orange'>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute
      top-0 left-0 w-full h-screen bg-gradient-to-b
      from-black to-gray-800 text-gray-500">
        {midnav.map(({id,title,style}) => (
          <li
            key={id} className="px-4 cursor-pointer capitalize py-6 
            md:hidden text-4xl"
          >
            <Link onClick={() => setNav(!nav)} to={title} smooth duration={500}>{title}</Link>
          </li>
        ))}
        <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button className='text-white'>Sign Up</button>
          </li>
          <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
            <button className='rounded-full bg-orange text-sm px-5 py-1 text-center'>Login</button>
          </li>
      </ul>
      )}
      
          
          
          </div>
        </div>
      </div>
  
  );
};

export default Navbar;
