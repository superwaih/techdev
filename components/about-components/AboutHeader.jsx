import React from 'react'
import Link from 'next/link'

const AboutHeader = () => {
  return (
    <div className="bg-aboutbg bg-cover flex mb-8 flex-col items-center w-full h-fit min-h-[60vh] bg-center  bg-no-repeat">
    <nav className='flex py-4  text-orange font-bold'>
        <ul className='flex justify-between gap-3 md:gap-6 m-auto'>
            <Link href={"/"}>
            <li className='text-[15px] md:text-xl' >Home</li>
            </Link>
            <Link href={"/services"}>
            <li className='text-[15px] md:text-xl' >Services</li>
            </Link>
            <Link href={"/about"}>
            <li className='text-[15px] md:text-xl' >About</li>
            </Link>
             <Link href={"/contact"}>
            <li className='hidden md:inline-block text-[15px] md: text-xl'>Contact</li>
            </Link>

        </ul>
    </nav>

   <div className='flex items-center justify-center py-32'>
   <h1 className='font-bold md:text-5xl text-3xl text-orange lg:text-8xl'>About TechDev</h1>
  
   </div>
   </div>
  )
}

export default AboutHeader