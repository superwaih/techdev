import React from 'react'
import Image from 'next/image'
import image1 from "../imgs/reasons.png"
const AboutStatement = () => {
  return (
    <div className='space-y-8 py-8 m-auto w-[70%]'>
        <div className='items-center font-bold text-[25px] md:text-[38px] flex justify-center'>
        TECH<span className='text-orange'>DEV</span> CYBER
        </div>
      <div className='flex w-full md:flex-row justify-between flex-col'>
      <div className='font-semibold relative max-w-[900px]'>
            <p>Techdev Cyber is a digital service provider agency that helps businesses of all sizes to grow and succeed. We provide a complete suite of services from Strategy, Web Design & Development, App Design, and SEO to Digital Marketing, Copywriting, UX/UI, and more.</p>
            <div className='h-20 w-20 left-[20%] absolute top-0 bg-[#FF5C00] opacity-50 rounded-full' ></div>
        </div>
        <div className=''>
            <Image
                width={0}
                height={500}
                objectFit="cover"
                src={image1}
                alt=""
            />
        </div>
      </div>
    </div>
  )
}

export default AboutStatement