import React from 'react'
import Image from 'next/image'
import Shape from "../imgs/small-shape.png"

const Partners = () => {
  return (
    <div className='bg-[#DBDBDB] z-50 py-6 px-3'>
        <h1 className='py-4 text-center font-bold  '>Our Partners</h1>
        <div className='relative m-auto z-50 shadow-md grid grid-cols-2 gap-2 md:grid-cols-4 w-[85%] bg-white rounded-md py-12 px-4'>
            <div className='text-center p-2 md:border-b-0 border-b-2 md:border-r-2 border-[#797979]'>
                <h3 className='font-bold '>860</h3>
                <p className='font-semibold '>Projects Completed</p>
            </div>
            <div className='text-center p-2 md:border-r-2 md:border-b-0 border-b-2 border-[#797979]'>
                <h3 className='font-bold '>50</h3>
                <p className='font-semibold '>Active Clients</p>
            </div>
            <div className='text-center p-2 md:border-r-2 border-[#797979]'>
                <h3 className='font-bold '>93</h3>
                <p className='font-semibold '>Cup of Coffee</p>
            </div>
            <div className='text-center'>
                <h3 className='font-bold '>970</h3>
                <p className='font-semibold '>Happy Clients</p>
            </div>

        
        <div className="ball z-2 absolute left-0 bottom-0 rounded-full h-12 w-12">
            <Image
                width={0}
                height={0}
                objectFit="cover"
                src={Shape}
                alt=""
            />
        </div>
        </div>

    </div>
  )
}

export default Partners