import React from 'react'
import {BsArrowRight} from "react-icons/bs"


const SpecialServiceCard = () => {
  return (
    <div className="flex flex-col shadow-md text-white items-center justify-center l p-6 space-y-6 rounded-2xl bg-orange">
   
    
    <h3 className="mt-8 font-bold text-2xl">UI and UX Design</h3>
    <p>
      
      Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do.
    </p>

   <button className="bg-white p-3 rounded-full text-black">
      <BsArrowRight />
   </button>
  </div>
  )
}

export default SpecialServiceCard