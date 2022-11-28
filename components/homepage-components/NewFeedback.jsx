import React from "react";
import Image from "next/image";
import Image1 from "../imgs/swipeimgs/image1.png";
import Image2 from "../imgs/swipeimgs/image2.png";
import Image3 from "../imgs/swipeimgs/image3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import AliceCarousel from 'react-alice-carousel';
import {AiFillStar} from "react-icons/ai"
import "react-alice-carousel/lib/alice-carousel.css";

import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/navigation';

const NewFeedback = ({services}) => {

  const items = [
    <div className=" m-2 rounded-sm p-7 sm:p-12 border-orange flex flex-col justify-between border-2 cursor-pointer shadow-md">
    <p className={services ? "text-[#666666] font-semibold" : "text-[#999999] font-semibold" } >
     This is due to their excellent service, competitive pricing and
      customer support. Its throughly refresing to get such a personal
      touch. Duis aute lorem ipsum is simply.
    </p>
    <div className="flex flex-col md:flex-row items-center pt-3  md:gap-5">
    <Image
        width={50}
        height={50}
        objectFit="cover"
        src={Image1}
        alt=""
        className="rounded-full"
      />
     <div>
     <h3 className="font-bold text-orange"> Aleesha brown</h3>
      <p className="font-bold">Satisfied customers</p>
     </div>
     <div className="flex gap-1">
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />

     </div>
    </div>
  </div>,

<div className=" m-2 rounded-sm  p-7 sm:p-12 border-orange flex flex-col justify-between border-2 cursor-pointer shadow-md">
<p className={services ? "text-[#666666] font-semibold" : "text-[#999999] font-semibold" } >
 This is due to their excellent service, competitive pricing and
  customer support. Its throughly refresing to get such a personal
  touch. Duis aute lorem ipsum is simply.
</p>
<div className="flex flex-col pt-3 md:flex-row items-center  md:gap-5">
<Image
    width={50}
    height={50}
    objectFit="cover"
    src={Image1}
    alt=""
    className="rounded-full"
  />
 <div>
 <h3 className="font-bold text-orange"> Aleesha brown</h3>
  <p className="font-bold">Satisfied customers</p>
 </div>
 <div className="flex gap-1">
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />

     </div>
</div>
</div>,

<div className=" m-2 rounded-sm p-7 sm:p-12 border-orange flex flex-col justify-between border-2 cursor-pointer shadow-md">
<p className={services ? "text-[#666666] font-semibold" : "text-[#999999] font-semibold" } >
 This is due to their excellent service, competitive pricing and
  customer support. Its throughly refresing to get such a personal
  touch. Duis aute lorem ipsum is simply.
</p>
<div className="flex flex-col pt-3 items-center md:flex-row  md:gap-5">
<Image
    width={50}
    height={50}
    objectFit="cover"
    src={Image1}
    alt=""
    className="rounded-full"
  />
 <div>
 <h3 className="font-bold text-orange"> Aleesha brown</h3>
  <p className="font-bold">Satisfied customers</p>
 </div>
 <div className="flex gap-1">
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />
      <AiFillStar className="text-yellow-400 text-2xl" />

     </div>
</div>
</div>
  
  ]

  const responsive = {
    0:{
      items: 1
    },
    512:{
      items: 1
    },
    1024:{
      items: 1
    }
  }
  return (
    <section className={services ? "bg-[#F0F0F0] space-y-4" :"space-y-4 bg-white"} >
      <div className="w-[85%] m-auto flex py-4 justify-evenly md:flex-row flex-col">
        <div className=" flex-1  py-8 flex flex-col space-y-3">
          <h2 className="flex gap-3 items-center  font-semibold text-black">
            <span className="h-4 w-4 bg-orange rounded-md"></span> Clients
            Feedback
          </h2>
          <p className="font-bold max-w-sm text-3xl">What they are saying about us</p>
          <button className= {services ? "bg-black border w-3/5 h-20 8 px-16  rounded-[48px]" : "border-orange border w-3/5 h-20 max-w-lg  px-16 bg-orange rounded-[48px]"} ></button>
        </div>
        <div className="flex-1 max-w-2xl">
        <AliceCarousel mouseTracking 
       infinite
       autoPlayInterval={1000}
       animationDuration={1000}
       disableDotsControls
       autoPlay
       responsive={responsive}
      //  className="hover:border-2 border-orange"
       items={items} />
        {/* <Swiper>
          <SwiperSlide>
          <div className="flex-1 max-w-lg p-7 sm:p-12 border-orange flex flex-col justify-between border-2 cursor-pointer shadow-md">
    <p className={services ? "text-[#666666] font-semibold" : "text-[#999999] font-semibold" } >
     This is due to their excellent service, competitive pricing and
      customer support. Its throughly refresing to get such a personal
      touch. Duis aute lorem ipsum is simply.
    </p>
    <div className="flex flex-col md:flex-row  md:gap-5">
    <Image
        width={50}
        height={50}
        objectFit="cover"
        src={Image1}
        alt=""
        className="rounded-full"
      />
     <div>
     <h3 className="font-bold text-orange"> Aleesha brown</h3>
      <p className="font-bold">Satisfied customers</p>
     </div>
    </div>
  </div>
            
          </SwiperSlide>
          <SwiperSlide>
          <div className="flex-1 max-w-lg p-7 sm:p-12 border-orange flex flex-col justify-between border-2 cursor-pointer shadow-md">
    <p className={services ? "text-[#666666] font-semibold" : "text-[#999999] font-semibold" } >
     This is due to their excellent service, competitive pricing and
      customer support. Its throughly refresing to get such a personal
      touch. Duis aute lorem ipsum is simply.
    </p>
    <div className="flex flex-col md:flex-row  md:gap-5">
    <Image
        width={50}
        height={50}
        objectFit="cover"
        src={Image1}
        alt=""
        className="rounded-full"
      />
     <div>
     <h3 className="font-bold text-orange"> Aleesha brown</h3>
      <p className="font-bold">Satisfied customers</p>
     </div>
    </div>
  </div>
            
          </SwiperSlide>
        </Swiper> */}

  </div>

       

        
       
       
      </div>

   
    </section>
  );
};

export default NewFeedback;
