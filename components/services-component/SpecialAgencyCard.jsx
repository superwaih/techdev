import React from 'react'
import Image from 'next/image'
const SpecialAgencyCard = ({data, margin}) => {
  return (
    <div className={`flex max-w-[420px] justify-evenly cursor-pointer hover:scale-105 duration-300 shadow-xl mb-4 flex-col rounded-2xl mt-${margin}`  }>
         <div className="flex-1 ">
            <Image
             height={0} 
            width={0}
             
            src={data.image} alt="" />
          </div>
         <div className="flex-1  flex flex-col  items-center justify-center">
          <h3 className="mt-2 text-[#FF5C00] p-2 font-bold text-2xl">{data.title}</h3>
          <p className="p-4">{data.text}</p>
          <div className="flex p-2 items-center justify-center">
            <div className="p-8 border-2 rounded-full  border-[#FF5C00] w-full"></div>
          </div>
        <div className="p-2 bg-[#FF5C00] w-full rounded"></div>

        </div>
       </div>
  )
}

export default SpecialAgencyCard