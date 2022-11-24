import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className=" text-white bg-heromobile md:bg-hero bg-cover w-full h-fit lg:h-[648px] bg-center  bg-no-repeat">

   <div className='m-auto w-[85%]'>
   <nav className='flex py-4 items-center justify-center w-full'>
        <ul className='flex justify-between gap-3 md:gap-6 m-auto'>
            <Link href={"/"}>
            <li className='text-[15px] md:text-xl lg:text-4xl' >Home</li>
            </Link>
            <Link href={"/services"}>
            <li className='text-[15px] md:text-xl lg:text-4xl'>Services</li>
            </Link>
            <Link href={"/about"}>
            <li className='text-[15px] md:text-xl lg:text-4xl'>About</li>
            </Link>
            <Link href={"/contact"}>
            <li className='hidden md:inline-block text-[15px] lg:text-4xl md:text-xl'>Contact</li>
            </Link>

        </ul>
    </nav>
   <div className='w-full flex flex-col item-center  space-y-8 px-6 py-4'>
   <h1 className='font-bold mt-20 text-5xl md:text-6xl 2xl:text-[78px]'>Smart Digital Agency</h1>
    <p className='mt-4 font-semibold w-full md:w-3/5 max-w-lg leading-20 text-2xl'>
    We are a leading team for delivering the latest solutions for your business to stand it out apart from the rest.
    </p>
    <button className='border-orange border md:w-1/4 px-8 py-4 md:px-12 text-orange rounded-[48px]'>Consult Now</button>
   </div>
   </div>

   </div>
  )
}

export default Hero