import React from 'react'
import Image from 'next/image'
import image1 from "../imgs/swipeimgs/image1.png"

const QualityTestimonial = () => {
  return (
    <div className='bg-quality  flex md:flex-row flex-col justify-between bg-center bg-slate-600 bg-opacity-90 bg-no-repeat text-white bg-cover p-8'>
      <div className='p-4 w-full space-y-5'>
      <h2 className="flex gap-3 items-center  font-semibold ">
            <span className="h-4 w-4 bg-orange rounded-md"></span> Corporate Business Theme
          </h2>
        <p className='font-bold text-3xl
        '>We make the quality design & developments</p>
        <div className='flex gap-5 items-center'>
      <Image
        width={100}
        className="rounded-full"
        height={100}
        src={image1}
        alt=""
      />
      <p className='font-bold text-xl'>John Smith</p>
        </div>
      </div>

      <div className='w-full p-4 space-y-4'>
        <div className='flex gap-6 flex-col'>
          <div className='flex w-full justify-between'>
            <h3 className='font-bold'>Web Design</h3>
            <p>93%</p>
            </div>
            <div className='w-full relative h-[20px] bg-white rounded-lg'>
              <span className='bg-[#FF5C00] rounded-lg h-[20px] absolute top-0 left-0 w-[83%]'></span>
            </div>
        </div>
        <div className='flex gap-6 flex-col'>
          <div className='flex w-full justify-between'>
            <h3 className='font-bold'>Web Development</h3>
            <p>83%</p>
            </div>
            <div className='w-full relative h-[20px] bg-white rounded-lg'>
              <span className='bg-[#FF5C00] rounded-lg h-[20px] absolute top-0 left-0 w-[73%]'></span>
            </div>
        </div>
        <div className='flex gap-6 flex-col'>
          <div className='flex w-full justify-between'>
            <h3 className='font-bold'>Web Application</h3>
            <p>53%</p>
            </div>
            <div className='w-full relative h-[20px] bg-white rounded-lg'>
              <span className='bg-[#FF5C00] rounded-lg h-[20px] absolute top-0 left-0 w-[53%]'></span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default QualityTestimonial