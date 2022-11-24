import React, {useState} from 'react'
import Image from 'next/image'
import Shape from "../imgs/small-shape.png"
import dynamic from 'next/dynamic'
const AnimatedNumbers = dynamic(() => import('react-animated-numbers'), {
  ssr: false,
})
const Partners = () => {
   
    
  return (
    <div className="bg-[#DBDBDB] z-50 py-6 px-3 lg:py-12 lg:px-6">
      <h1 className="py-4 text-center font-bold  ">Our Partners</h1>
      <div className="relative m-auto z-50 shadow-md grid grid-cols-2 gap-2 md:grid-cols-4 w-[80%] bg-white rounded-md py-12 px-4">
        <div className="text-center p-2 md:border-b-0 border-b-2 md:border-r-2 border-[#797979]">
        <AnimatedNumbers
        includeComma
        animateToNumber={860}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
          <p className="font-semibold text-xl 2xl:text-4xl">Projects Completed</p>
        </div>
        <div className="text-center p-2 md:border-r-2 md:border-b-0 border-b-2 border-[#797979]">
        <AnimatedNumbers
        includeComma
        animateToNumber={50}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
          <p className="font-semibold text-xl 2xl:text-4xl">Active Clients</p>
        </div>
        <div className="text-center p-2 md:border-r-2 border-[#797979]">
        <AnimatedNumbers
        includeComma
        animateToNumber={93}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>

          <p className="font-semibold text-xl 2xl:text-4xl ">Cup of Coffee</p>
        </div>
        <div className="text-center">
    
        <AnimatedNumbers
        includeComma
        animateToNumber={970}
        fontStyle={{ fontSize: 40 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>

         
            <p className='font-semibold text-xl 2xl:text-4xl'>Happy Clients</p>
        </div>

        <div className="ball z-2 absolute left-0 bottom-0 rounded-full h-12 w-12">
          <Image width={0} height={0} objectFit="cover" src={Shape} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partners