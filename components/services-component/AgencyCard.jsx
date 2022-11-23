import React from "react";
import Image from "next/image";
const AgencyCard = ({ type, data }) => {
  return (
    <>
      {type === "orange" ? (
       <div className="flex max-w-[420px] justify-evenly shadow-xl mb-4 flex-col mt-32 rounded-2xl">
         <div className="flex-1 ">
            <Image
             height={0} 
            width={0}
             
            src={data.image} alt="" />
          </div>
         <div className="flex-1 text-white flex flex-col bg-[#FF5C00]  items-center justify-center">
          <h3 className="mt-4 p-2 font-bold text-2xl">{data.title}</h3>
          <p className="p-4">{data.text}</p>
          <div className="flex p-2 items-center justify-center">
            <div className="p-8 border-2 rounded-full  border-white w-full"></div>
          </div>
        <div className="p-2 bg-black w-full rounded"></div>

        </div>
       </div>
      ) : (
        <div className="flex max-w-[420px] justify-evenly shadow-xl flex-col mb-12 rounded-2xl">
         <div className="flex-1 ">
            <Image
             height={0} 
            width={0}
             
            src={data.image} alt="" />
          </div>
         <div className="flex-1 flex flex-col   items-center justify-center">
          <h3 className="mt-4 p-2 font-bold text-2xl text-[#FF5C00]">{data.title}</h3>
          <p className="p-4">{data.text}</p>
          <div className="flex p-2 items-center justify-center">
            <div className="p-8 border-2 rounded-full  border-[#FF5C00] w-full"></div>
          </div>
        <div className="p-2 bg-[#FF5C00] w-full rounded"></div>

        </div>
       </div>
      )}
    </>
  );
};

export default AgencyCard;
