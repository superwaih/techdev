import React from 'react'
import Image from 'next/image'
import Image1 from "../imgs/swipeimgs/image1.png"
import Image2 from "../imgs/swipeimgs/image2.png"

import {AiOutlineCheck} from "react-icons/ai"

const DisplayDetail = ({active, data}) => {
  return (
    <>
     {
        active === data.title && (
           <div className='w-full flex justify-between md:flex-row'>
             <div className='py-8 w-full flex-1  space-y-4'>
                <h3 className='font-bold text-2xl'>
                {data.title}
                </h3>
                <p className='font-semibold'>
                    {data.content}
                </p>
                <h4 className='font-bold text-xl'>Planning and work strategy</h4>
                <p className='font-semibold ' >{data.subtitle}</p>
                <ul>
                    {data.perks.map((d, index) => 
                    (
                        <li className='flex gap-3 items-center' key={index}> 
                        <AiOutlineCheck className='text-[#FF5C00]' /> {d}</li>
                    ))}
                </ul>
                <p className='font-semibold'>{data.endingText}</p>
            </div>
            <div className='md:flex w-full flex-1 hidden  gap-8 flex-col'>
                <Image
                    width={300}
                    height={200}
                    src={Image1}
                    alt=""
                />
                  <Image
                    width={100}
                    height={100}
                    src={Image2}
                    alt=""
                />
            </div>
           </div>
        )
    }
    </>
  )
}

export default DisplayDetail