import React from "react";
import {BsArrowRight} from "react-icons/bs"
const ServiceCard = ({type, data, Icon}) => {
  return (

    <>
    {type === "orange" ? <div className="relative hover:scale-105 duration-300 shadow-md flex flex-col mt-32 items-center justify-center l p-6 space-y-6 rounded-2xl bg-white">
      <div className="h-32 z-50 w-32 text-center flex justify-center items-center shadow-md absolute bottom-[80%] rounded-full bg-orange">
        {/* {<data.Icon className="text-center h-12 w-12"/>} */}
        {<Icon />}
      </div>
      
      <h3 className="mt-8 font-bold text-2xl">{data.title}</h3>
      <p>
        
      {data.text}
      </p>

     <button className="bg-orange p-3 hover:bg-[#CACACA] hover:text-white rounded-full text-black">
        <BsArrowRight />
     </button>
    </div> : <div className="relative hover:scale-105 duration-300 shadow-md flex mt-20 mb-8 flex-col items-center justify-center l p-6 space-y-6 rounded-2xl bg-white">
      <div className="h-32 w-32 z-50 absolute text-center flex justify-center items-center shadow-md bottom-[80%] rounded-full bg-white">
        <Icon />
      </div>
      
      <h3 className="mt-8 font-bold text-2xl">{data.title}</h3>
      <p>
        
      {data.text}
      </p>

     <button className="bg-[#CACACA] p-3 hover:bg-orange hover:text-white rounded-full text-black">
        <BsArrowRight />
     </button>
    </div>}
        
    </>
    
  );
};

export default ServiceCard;
