import React from 'react'
import easylogo from '../assets/easylogo.png'

const Footer = () => {
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
    <div>
        <div>
            <img src={easylogo} alt="logo" />
        </div>
        <div className='flex flex-row justify-between w-[323px]'>
            {midnav.map(({ id, title, style }) => (
              <ul key={id}>
                <li className={style}><button>{title}</button></li>
              </ul>
            ))}
          </div>
    </div>
  )
}

export default Footer