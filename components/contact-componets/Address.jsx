import React from "react";
import Image from "next/image";
import image1 from "../imgs/map.png";
const Address = () => {
  return (
    <>
      <div className="items-center py-6 font-bold text-[25px] md:text-[38px] flex justify-center">
        Contact TECH<span className="text-orange">DEV</span> CYBER
      </div>
      <div className="contact w-[85%] pb-8 justify-between flex md:flex-row flex-col  m-auto gap-4">
      <div className="flex-1 flex justify-start w-full">
          <Image
            width={300}
            height={300}
            src={image1}
            alt=""
          />
        </div>
        <div className=" w-full flex-1 flex flex-col space-y-6">
          <p className="font-bold text-3xl md:text-5xl">Get in touch with the agency</p>
          <div className="flex flex-col md:flex-row">
            <div className="box p-2 flex-1">
              <p className="font-semibold">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have in some form.
              </p>
              <p className="font-bold">35,600</p>
              <p className="text-orange font-bold">Projects Completed</p>
            </div>
            <div className="box flex-1 flex flex-col bg-[#D9D9D9] rounded-md p-6">
              <h2 className="font-bold text-center text-orange text-2xl">
                Boston
              </h2>
              <p className="font-semibold">
                5 Federal street boston techdev@gmail.com
              </p>
              <p>47 6678 381</p>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
};

export default Address;
