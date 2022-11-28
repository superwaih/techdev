import React from "react";
import RoundedImg from "../imgs/rounded-img.png";
import Image from "next/image";
import { AiOutlineCheck } from "react-icons/ai";

const AboutBanner = () => {
  return (
    <div className="flex w-[80%]  flex-col gap-4 md:flex-row relative justify-between py-12 m-auto ">
      <div className="left flex-1">       
        <div className="relative max-w-lg">
        <div className="rounded-full absolute  flex flex-col items-center justify-center p-6 lg:p-12 h-24 w-24 lg:h-40 lg:w-40 shadow-md border bg-white">
          <div className="rounded-full md:w-30 p-2 lg:p-8 md:h-30 border-4 border-dashed">
            <p className="font-bold text-[12px]  uppercase text-center leading-5 text-orange">trusted by</p> 
            <p className="font-bold text-[12px] uppercase text-black text-center">6,506</p>
          </div>
        </div>
          <Image
            width={600}
            height={600}
            src={RoundedImg}
            alt="Image"
          />
        <div className="rounded-full bottom-0 
       right-0 absolute 
         flex flex-col items-center justify-center p-8 md:p-12 h-20 w-20 lg:h-32 lg:w-32 shadow-md border bg-orange">
        </div>
        </div>
        <div>

        </div>
      </div>
      <div className="right flex flex-col justify-evenly w-full md:w-4/5 flex-1">
        <h2 className="flex gap-5 items-center  font-semibold text-black">
          <span className="h-4 w-4 bg-orange rounded-md"></span> About Tech
          Cyber
        </h2>
        <p className="font-bold text-3xl">We provide the best web services</p>
        <div className="flex gap-4 lg:flex-row flex-col">
          <div className="bg-orange p-3 md:p-4 lg:p-6 flex items-center gap-3 text-white rounded-md">
            <AiOutlineCheck className="text-2xl font-bold" />
            <p className="font-semibold">
              Solution for small & large businesses
            </p>
          </div>
          <div className="bg-white p-3 md:p-4 lg:p-6 flex items-center border-black border font-bold text-black gap-4 rounded-md">
            <AiOutlineCheck className="text-2xl font-bold" />
            <p>Solution for small & large businesses</p>
          </div>
        </div>
        <div className="space-y-5">
          <p className="font-bold space-y-5 flex flex-col">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words.
          </p>
          <p className="">
            You need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the lorem ipsum generators on the Internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
