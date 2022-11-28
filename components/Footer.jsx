import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='bg-[#242424] p-8   '>
      <div className='flex justify-between md:flex-row flex-col gap-4 text-white m-auto w-[95%]'>
      <div className='items-center font-bold text-[25px] md:text-[38px] flex justify-center'>
        TECH<span className='text-orange'>DEV</span> CYBER
        </div>

       <div>
        <h5 className='font-bold mb-4 capitalize' >MENU</h5>
       <ul className='flex flex-col gap-2'>
        <Link  href={"/"}>
            <li className='text-[#BFBFBF] text-[17px] font-semibold'>Home</li>
        </Link>
        <Link  href={"/services"}>
            <li className='text-[#BFBFBF] text-[17px] font-semibold'>Services</li>
        </Link>
        <Link  href={"/about"}>
            <li className='text-[#BFBFBF] text-[17px] font-semibold'>About Us</li>
        </Link>
            <li className='text-[#BFBFBF] text-[17px] font-semibold'>Contact</li>
            <li className='text-[#BFBFBF] text-[17px] font-semibold'>Book a meeting</li>

        </ul>
       </div>
        <div className='space-y-4'>
            <h4 className='font-bold mb-4 capitalize' >Company</h4>

            <div className='text-[#BFBFBF] text-[16px] font-semibold'>
            <p>Organization Number:</p>
            <span className='underline'>990521-3311</span>    
            </div>
            <div className='text-[#BFBFBF] text-[16px] font-semibold'>
            <p>Phone Number:</p>
            <span className='underline'>990521-3311</span>    
            </div>
            <div className='text-[#BFBFBF] text-[16px] font-semibold'>
            <p>Email:</p>
            <span className='underline'>cabdullahi_143@hotmail.com </span>    
            </div>
            <div className='text-[#BFBFBF] text-[16px] font-semibold'>
            <p>Address:</p>
            <span className='underline'>Dalengatan 23A, Kalma </span>    
            </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer