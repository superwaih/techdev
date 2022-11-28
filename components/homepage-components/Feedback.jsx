import React from "react";
import Image from "next/image";
import Image1 from "../imgs/swipeimgs/image1.png";
import Image2 from "../imgs/swipeimgs/image2.png";
import Image3 from "../imgs/swipeimgs/image3.png";
const Feedback = ({services}) => {
  return (
    <section className={services ? "bg-[#F0F0F0] space-y-4" :"space-y-4 bg-white"} >
      <div className="w-[85%] m-auto flex md:flex-row flex-col">
        <div className=" flex-1  py-8 flex flex-col space-y-6">
          <h2 className="flex gap-3 items-center  font-semibold text-black">
            <span className="h-4 w-4 bg-orange rounded-md"></span> Clients
            Feedback
          </h2>
          <p className="font-bold text-3xl">What they are saying about us</p>
          <button className= {services ? "bg-black border w-3/5 h-20 8 px-16  rounded-[48px]" : "border-orange border w-3/5 h-20  px-16 bg-orange rounded-[48px]"} ></button>
        </div>
        <div className="flex-1 py-8 space-y-5">
          <div className="images flex gap-4">
            <Image
              width={30}
              height={30}
              objectFit="cover"
              src={Image1}
              alt=""
              className="rounded-full"
            />
            <Image
              width={30}
              height={30}
              objectFit="cover"
              src={Image2}
              alt=""
              className="rounded-full"
            />
            <Image
              width={30}
              height={30}
              objectFit="cover"
              src={Image3}
              alt=""
              className="rounded-full"
            />
          </div>
          <p className={services ? "text-[#666666] font-semibold" : "text-[#999999] font-semibold" } >
            This is due to their excellent service, competitive pricing and
            customer support. Its throughly refresing to get such a personal
            touch. Duis aute lorem ipsum is simply.
          </p>
          <div>
            <h3 className="font-bold text-orange"> Aleesha brown</h3>
            <p className="font-bold">Satisfied customers</p>
          </div>
        </div>
      </div>

   
    </section>
  );
};

export default Feedback;
