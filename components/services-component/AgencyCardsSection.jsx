import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';

import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import AgencyCard from './AgencyCard';
import { services1, services2 } from '../../utils/data';
import SpecialAgencyCard from './SpecialAgencyCard';

const AgencyCardsSection = () => {
    const pagination = {
        clickable: true,
      };
  return (
    <div className='m-auto w-[85%]'>
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
         {services1.map((data) => {
           return(
             <SwiperSlide>
               <AgencyCard data={data} type={data.type} key={data.id} />
             </SwiperSlide>
           )
         })}
        
        
    </Swiper>

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
         {services2.map((data) => {
           return(
             <SwiperSlide>
               <SpecialAgencyCard margin={data.margin} data={data} type={data.type} key={data.id} />
             </SwiperSlide>
           )
         })}
        
        
    </Swiper>
        
    </div>
  )
}

export default AgencyCardsSection