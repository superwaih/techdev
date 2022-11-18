import React from "react";
import {BsArrowRight} from "react-icons/bs"
const ServiceCard = ({type}) => {
  return (

    <>
    {type === "orange" ? <div className="relative shadow-md flex flex-col mt-32 items-center justify-center l p-6 space-y-6 rounded-2xl bg-white">
      <div className="h-32 z-50 w-32 shadow-md absolute bottom-[80%] rounded-full bg-orange">

      </div>
      
      <h3 className="mt-8 font-bold text-2xl">Web Design</h3>
      <p>
        
        Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do.
      </p>

     <button className="bg-orange p-3 rounded-full text-black">
        <BsArrowRight />
     </button>
    </div> : <div className="relative shadow-md flex mt-20 mb-8 flex-col items-center justify-center l p-6 space-y-6 rounded-2xl bg-white">
      <div className="h-32 w-32 z-50 absolute shadow-md bottom-[80%] rounded-full bg-white">

      </div>
      
      <h3 className="mt-8 font-bold text-2xl">Web Design</h3>
      <p>
        
        Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do.
      </p>

     <button className="bg-[#CACACA] p-3 rounded-full text-black">
        <BsArrowRight />
     </button>
    </div>}
        
    </>
    
  );
};

export default ServiceCard;
