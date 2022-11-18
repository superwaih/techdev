import React from 'react'
import ServiceCard from './ServiceCard'
import SpecialServiceCard from './SpecialServiceCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';



import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';

const ServiceList = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <section className='bg-services bg-cover space-y-4 min-h-[40vh]'>
        <div className='w-[85%] m-auto '>
       <div className='text-center justify-center py-8 flex flex-col
       space-y-6
       items-center'>
       <h2 className="flex gap-5 items-center text-2xl font-bold text-black">
          <span className="h-4 w-4 bg-orange rounded-md"></span> Our Service List
        </h2>
        <p className='font-bold text-3xl'>What we’re offering</p>
       </div>
        <div className='pb-12 space-y-8 mt-16'>
        <Swiper
       
      modules={[ Navigation, Pagination]}
    
      pagination={pagination}

       breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      >
         <SwiperSlide>
         <ServiceCard />
            
        </SwiperSlide>

        <SwiperSlide>
        <ServiceCard type={"orange"} />
       
          
        </SwiperSlide> 

        <SwiperSlide>
        
        <ServiceCard />
         
         </SwiperSlide>
       
      </Swiper>
        
        
        
    

        <Swiper
      modules={[ Navigation, Pagination]}
      pagination={true}

       breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      }}
      >
         <SwiperSlide>
        <SpecialServiceCard />
            
        </SwiperSlide>

        <SwiperSlide>
        <SpecialServiceCard />
       
          
        </SwiperSlide> 

        <SwiperSlide>
        
        <SpecialServiceCard />
         
         </SwiperSlide>
       
      </Swiper>
        
       



        </div>

        </div>

    </section>
  )
}

export default ServiceList