import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="text-2xl text-white bg-heromobile md:bg-hero bg-cover w-full h-fit min-h-[60vh] bg-center  bg-no-repeat">

    <nav className='flex py-4 m-auto w-[95%]'>
        <ul className='flex justify-between gap-3 md:gap-6 m-auto'>
            <Link href={"/"}>
            <li className='text-[15px] md:text-xl' >Home</li>
            </Link>
            <Link href={"/services"}>
            <li className='text-[15px] md:text-xl'>Services</li>
            </Link>
            <Link href={"/about"}>
            <li className='text-[15px] md:text-xl'>About</li>
            </Link>
            <Link href={"/contact"}>
            <li className='hidden md:inline-block text-[15px] md: text-xl'>Contact</li>
            </Link>

        </ul>
    </nav>
   <div className='w-full md:w-[95%] m-auto space-y-8 px-8 py-3  md:px-20 md:py-8'>
   <h1 className='font-bold mt-20 text-5xl md:text-8xl '>Smart Digital Agency</h1>
    <p className='mt-4 font-semibold w-full md:w-3/5 text-2xl'>
    We are a leading team for delivering the latest solutions for your business to stand it out apart from the rest.
    </p>
    <button className='border-orange border px-8 py-4 md:px-12 text-orange rounded-[48px]'>Consult Now</button>
   </div>

   </div>
  )
}

export default Hero