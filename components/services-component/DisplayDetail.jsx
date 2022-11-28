import React from 'react'
import Image from 'next/image'
import Image1 from "../imgs/swipeimgs/image1.png"
import Image2 from "../imgs/swipeimgs/image2.png"

import {AiOutlineCheck} from "react-icons/ai"

const DisplayDetail = ({data}) => {
  return (
    <>
           <section id={data.href} className='w-full flex justify-evenly flex-col gap-2 md:flex-row'>
             <div className=' flex-1 flex flex-col space-y-4 justify-evenly'>
                <h3 className={data.id % 2 == 0 ? 'font-bold text-4xl' : 'font-bold text-orange text-4xl'} >
                {data.title} <span className={data.id % 2 == 0 ? 'font-bold text-5xl text-orange' : 'font-bold text-5xl text-black'} >.</span>
                </h3>
                <p className='text-[#333333]'>
                    {data.content}
                </p>
            </div>
            <div className='flex-1 flex justify-center md:justify-end'>
                <Image
                    width={300}
                    height={200}
                    src={Image1}
                    alt=""
                />
            </div>
           </section>

    </>
  )
}

export default DisplayDetail