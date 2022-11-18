import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Image from "next/image";
import Image1 from "./imgs/swipeimgs/image1.png";
import Image2 from "./imgs/swipeimgs/image2.png";
import Image3 from "./imgs/swipeimgs/image3.png";
import Image4 from "./imgs/swipeimgs/image4.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";

const ShowcaseSlide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      pagination={true}
      navigation={true}
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
        <div className="flex justify-center items-center">
          <Image
            width={300}
            height={300}
            objectFit="cover"
            src={Image1}
            alt=""
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex justify-center items-center">
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
        <div className="flex justify-center items-center">
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
        <div className="flex justify-center items-center">
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
  );
};

export default ShowcaseSlide;
