import React, { useState } from 'react'
import Image from 'next/image'
import Image1 from "../imgs/serviceStack.png"
import { Stacks, StacksDesc } from '../../utils/data'
import DisplayDetail from './DisplayDetail'
const ServicesStack = () => {
    const[activeStack, setActiveStack] = useState("Website Design")
  return (
    <>
    <section className='w-[95%] gap-4  m-auto mb-4 py-4 justify-evenly flex flex-col md:flex-row'>
       <div className=''>
       <Image
            width={0}
            height={0}
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

    <div className='mb-4 w-[95%] mx-auto flex flex-col gap-4 justify-evenly '>
    {StacksDesc.map((data) => (
                <DisplayDetail active={activeStack} data={data} />
            ))}
    </div>
    </>
  )
}

export default ServicesStack