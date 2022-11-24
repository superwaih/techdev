import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from "../imgs/serviceStack.png"
import { Stacks, StacksDesc } from '../../utils/data'
import DisplayDetail from './DisplayDetail'
const ServicesStack = () => {
    const[activeStack, setActiveStack] = useState("Website Design")
  return (
    <>
    <section className='md:w-[80%] mb-4 py-4 justify-between flex flex-col md:flex-row gap-4 '>
       <div className=''>
       <Image
            width={700}
            height={700}
            objectFit="cover"
            src={Image1}
            alt=""
        />
       </div>

        <div className='bg-[#DFDFDF] max-w-[550px] rounded-md flex flex-col justify-between w-full py-2 space-y-4'>
            {Stacks.map((data) => (
                <p 
                onClick={() => setActiveStack(data.title)}
                className={activeStack === data.title ? `bg-[#FF5C00] text-white p-5  font-bold cursor-pointer` :`font-bold p-4 cursor-pointer`} key={data.id} >{data.title}</p>
            ))}
          
        </div>
        <div>

        </div>
    </section>

    <div className='mb-4 md:w-[80%] flex flex-col md:flex-row gap-4 justify-between '>
    {StacksDesc.map((data) => (
                <DisplayDetail active={activeStack} data={data} />
            ))}
    </div>
    </>
  )
}

export default ServicesStack