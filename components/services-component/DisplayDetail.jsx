import React from 'react'
import Image from 'next/image'
import Image1 from "../imgs/swipeimgs/image1.png"
import Image2 from "../imgs/swipeimgs/image2.png"

import {AiOutlineCheck} from "react-icons/ai"

const DisplayDetail = ({data}) => {
  return (
    <>
           <section className='w-full flex justify-evenly flex-col gap-2 md:flex-row'>
             <div className=' flex-1 space-y-4'>
                <h3 className={data.id % 2 == 0 ? 'font-bold text-2xl' : 'font-bold text-orange text-2xl'} >
                {data.title} <span className={data.id % 2 == 0 ? 'font-bold text-5xl text-orange' : 'font-bold text-5xl text-black'} >.</span>
                </h3>
                <p className='font-semibold'>
                    {data.content}
                </p>
            </div>
            <div className='flex-1'>
                <Image
                    width={0}
                    height={300}
                    src={Image1}
                    alt=""
                />
            </div>
           </section>

    </>
  )
}

export default DisplayDetail