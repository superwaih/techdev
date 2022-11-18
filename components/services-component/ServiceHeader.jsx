import React from 'react'
import Link from 'next/link'

const ServiceHeader = () => {
  return (
    <div className="bg-aboutbg bg-cover flex mb-8 flex-col items-center w-full h-fit min-h-[60vh] bg-center  bg-no-repeat">
    <nav className='flex py-4  text-orange font-bold'>
        <ul className='flex justify-between gap-3 md:gap-6 m-auto'>
            <Link href={"/"}>
            <li>Home</li>
            </Link>
            <Link href={"/services"}>
            <li>Services</li>
            </Link>
            <Link href={"/about"}>
            <li>About</li>
            </Link>
            <li className='hidden md:inline-block'>Contact</li>

        </ul>
    </nav>

   <div className='flex items-center justify-center py-32'>
   <h1 className='font-bold md:text-5xl text-3xl text-orange lg:text-8xl'>Our Agency Service</h1>
  
   </div>
   </div>
  )
}

export default ServiceHeader