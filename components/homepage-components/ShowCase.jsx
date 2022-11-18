import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import Image from 'next/image';
import Image1 from "../imgs/swipeimgs/image1.png"
import Image2 from "../imgs/swipeimgs/image2.png"
import Image3 from "../imgs/swipeimgs/image3.png"
import Image4 from "../imgs/swipeimgs/image4.png"



import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/navigation';
const ShowCase = ({type}) => {
  return (
    <section className='space-y-4 pb-8 min-h-[40vh]'>
        <div className='w-[85%] m-auto '>

   <div className='text-center hidden justify-center py-8  flex-col
       space-y-6
       items-center'>
       <h2 className= {type === "nobanner" ? "hidden gap-5 items-center  font-semibold text-black" : "flex gap-5 items-center font-semibold text-black" }>
          <span className="h-4 w-4 bg-orange rounded-md"></span> Recent Work Completed
        </h2>
        <p className='font-bold text-3xl'>Work Showcase</p>
       </div>

       <Swiper
      modules={[ Navigation, Pagination]}
      pagination={true}
      navigation={true}
      

       breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      >
         <SwiperSlide>
           <div className='flex justify-center items-center'>
           <Image
                width={300}
                height={300}
                objectFit="cover"
                src={Image1}
                alt=""
            /></div>    
        </SwiperSlide>

        <SwiperSlide>
        <div className='flex justify-center items-center'>
        <Image
                width={300}
                height={300}
                objectFit="cover"
                src={Image2}
                alt=""
            />    

        </div>
          
        </SwiperSlide> 

        <SwiperSlide>
        <div className='flex justify-center items-center'>
            
        <Image
                width={300}
                height={300}
                objectFit="cover"
                src={Image3}
                alt=""
            />    
            </div>
         
         </SwiperSlide>
         <SwiperSlide>
         <div className='flex justify-center items-center'>
        <Image
                width={300}
                height={320}
                objectFit="cover"
                src={Image4}
                alt=""
            />    
            
            </div>
         
         </SwiperSlide>
      </Swiper>
       

        </div>

    </section>
  )
}

export default ShowCase