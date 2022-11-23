import React from 'react'
import Image from 'next/image';
import Image1 from "../imgs/swipeimgs/image1.png"
import Image2 from "../imgs/swipeimgs/image2.png"
import Image3 from "../imgs/swipeimgs/image3.png"
import Image4 from "../imgs/swipeimgs/image4.png"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const Team = () => {
  const items = [
   <div className='m-2'>
     <Image
                width={300}
                height={300}
                src={Image1}
                alt=""
            />
            <div className='font-bold text-center'>
              <h3>Christine Lora</h3>
              <p className='text-[#FF5C00]'>Developer</p>
            </div>
   </div>,
   <div className='m-2'>
   <Image
              width={300}
              height={300}
              src={Image2}
              alt=""
          />
          <div className='font-bold text-center'>
            <h3>Christine Lora</h3>
            <p className='text-[#FF5C00]'>Developer</p>
          </div>
 </div>,<div className='m-2'>
     <Image
                width={300}
                height={300}
                src={Image3}
                alt=""
            />
            <div className='font-bold text-center'>
              <h3>Christine Lora</h3>
              <p className='text-[#FF5C00]'>Developer</p>
            </div>
   </div>,<div className='m-2'>
     <Image
                width={300}
                height={300}
                src={Image1}
                alt=""
            />
            <div className='font-bold text-center'>
              <h3>Christine Lora</h3>
              <p className='text-[#FF5C00]'>Developer</p>
            </div>
   </div>,<div className='m-2'>
     <Image
                width={300}
                height={300}
                src={Image2}
                alt=""
            />
            <div className='font-bold text-center'>
              <h3>Christine Lora</h3>
              <p className='text-[#FF5C00]'>Developer</p>
            </div>
   </div>,<div className='m-2'>
     <Image
                width={300}
                height={300}
                src={Image3}
                alt=""
            />
            <div className='font-bold text-center'>
              <h3>Christine Lora</h3>
              <p className='text-[#FF5C00]'>Developer</p>
            </div>
   </div>,
  ]
  const responsive = {
    0:{
      items: 1
    },
    512:{
      items: 2
    },
    1024:{
      items: 4
    }
  }
  return (
    <section className='py-8'>
       <div className='flex flex-col p-8 items-center justify-center'>
        <h3 className='font-bold text-3xl text-center'>Our Mission</h3>
        <p className='text-[#FF5C00] max-w-[1200px] text-center font-bold text-xl'>Meet Our Experts</p>
    </div>
    <div className='w-[85%] m-auto space-y-6'>
    <AliceCarousel mouseTracking 
       infinite
       autoPlayInterval={1000}
       animationDuration={1000}
       disableDotsControls
       autoPlay
       responsive={responsive}
       className="hover:border-2 border-orange"
       items={items} />

       <p className='font-bold'>Our team is made up of experts in each of these areas who work together to create the most effective online marketing strategies for your business. We provide you with the best digital solution to grow your business and reach your goals.</p>

       <p className='font-bold'>As an experienced team, we understand the importance of building trust and credibility in your customers’ minds. We know that it takes more than a catchy title to make a difference. That’s why we’ve developed our reputation as one of the best internet marketing agencies, by delivering the</p>

    </div>
    </section>
  )
}

export default Team