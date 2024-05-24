import React from 'react'
import left from '../assets/Button.png'
import quote from '../assets/quote.png'
import right from '../assets/rightimg.png'

const Testimonials = () => {
  const cards = [
    {
      id: 1,
      src: quote,
      style: "bg-gradient-to-r from-transparent to-customBlack ",
    },
    {
      id: 2,
      src: quote,
      style:"md:flex hidden"
    },
    {
      id: 3,
      src: quote,
      style: "bg-gradient-to-r from-customBlack to-transparent md:flex hidden",
    },
  ];
  return (
    <div className="p-8 bg-[#1C1C1C]">
      <div className="flex md:flex-row flex-col  justify-between md:mx-6 items-center text-white font-lexend md:my-24 my-10">
        <div className="flex flex-col justify-between gap-3 md:w-7/12 w-full">
          <h1 className="font-medium md:text-5xl text-lg text-orange md:text-start text-center">
            Our Testimonials
          </h1>
          <p className=" font-light text-base md:text-start text-center text-[#B3B3B3]">
            Discover how Your Bank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        <div className="flex flex-row justify-between w-60 pr-4 p-2 border-2 rounded-full border-[#262626] md:m-0 m-5">
          <div className="">
            <button className=" rounded-full bg-orange w-28 font-light text-sm p-1 ">
              For Individuals
            </button>
          </div>
          <button className="font-light text-sm ">For Business</button>
        </div>
      </div>
      <div className="mx-6 items-center flex flex-row  justify-between ">
        <div className="">
          <img className="hidden md:flex" src={left} alt="" />
        </div>
        <div className="flex flex-col md:flex-row justify-center w-fit">
          <div className="flex flex-row mx-6 justify-between w-10/12 gap-5p">
            {cards.map(({ id, src, style }) => (
              <div
                key={id}
                className={`flex flex-col justify-between gap-5 ${style}`}
              >
                <div className="flex flex-row w-full">
                  <hr class="w-4/12 mt-6  border-[#262626]" />
                  <img src={src} alt="" srcset="" />
                  <hr class="w-4/12 mt-6  border-[#262626]" />
                </div>

                <div>
                  <p className=" text-[#ffff] font-normal text-sm">
                    Your Bank has been my trusted financial partner for years.
                    Their personalized service and innovative digital banking
                    solutions have made managing my finances a breeze.
                  </p>
                </div>
                <div>
                  <p class=" text-orange text-center mt-4">Ajose T</p>
                </div>
              </div>
            ))}
          </div>
          {/* Arrows for smaller screens */}
          <div className="flex md:hidden flex-row justify-center gap-3 items-center mt-4">
            <img className="" src={left} alt="left arrow" />
            <img className="" src={right} alt="right arrow" />
          </div>
        </div>

        <div className="hidden md:flex">
          <img className="" src={right} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;