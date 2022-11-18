import React from 'react'
import Link from 'next/link'


const Footer = () => {
  return (
    <footer className='bg-black p-8   '>
      <div className='flex justify-between md:flex-row flex-col gap-4 text-white m-auto w-[95%]'>
      <div className='items-center flex justify-center'>
        TECHDEV CYBER
        </div>

       <div>
        <h5>MENU</h5>
       <ul>
        <Link  href={"/"}>
            <li>HOME</li>
        </Link>
        <Link  href={"/services"}>
            <li>SERVICES</li>
        </Link>
        <Link  href={"/about"}>
            <li>ABOUT US</li>
        </Link>
            <li>CONTACT</li>
            <li>Book a meeting</li>

        </ul>
       </div>
        <div>
            <h4>Company</h4>

            <div>
            <p>Organization Number:</p>
            <span>990521-3311</span>    
            </div>
            <div>
            <p>Phone Number:</p>
            <span>990521-3311</span>    
            </div>
            <div>
            <p>Email:</p>
            <span>cabdullahi_143@hotmail.com </span>    
            </div>
            <div>
            <p>Address:</p>
            <span>Dalengatan 23A, Kalma </span>    
            </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer