import React from 'react'
import Image from 'next/image'
import Image1 from "../imgs/swipeimgs/image1.png"
const Mission = () => {
  return (
    <div>
        <h3 className='font-bold text-3xl md:text-5xl py-8 text-orange text-center'>Our Mission</h3>

    <div className='flex justify-between w-[85%] gap-5 md:flex-row flex-col m-auto'>
      <div className='flex-1'>
        <p className=' leading-[25px] max-w-lg md:leading-[38px] font-bold text-xl'>
        We are here to enable innovative companies to create better and fairer web services for everyone through the power of Professionalism.</p>
    </div>
    <div className='flex-1 flex justify-center w-full'>
      <Image
        width={300}
        height={0}
        objectFit="contain"
        src={Image1}
        alt=""
      />
    </div>
    </div>
    </div>
  )
}

export default Mission