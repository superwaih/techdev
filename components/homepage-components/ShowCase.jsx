import React from 'react'
import Image from 'next/image';
import Image1 from "../imgs/swipeimgs/image1.png"
import Image2 from "../imgs/swipeimgs/image2.png"
import Image3 from "../imgs/swipeimgs/image3.png"
import Image4 from "../imgs/swipeimgs/image4.png"

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";



import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/navigation';
const ShowCase = ({type}) => {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Image
                width={300}
                height={300}
                src={Image1}
                alt=""
            />,
            <Image
            width={300}
            height={300}
            src={Image3}
            alt=""
        />,
        <Image
        width={300}
        height={300}
        
        src={Image3}
        alt=""
        role="presentation"
    />,
            <Image
                width={300}
                height={300}
                src={Image2}
                alt=""
            />,
            <Image
                width={300}
                height={300}
                src={Image3}
                alt=""
            />,
            <Image
                width={300}
                height={300}
                src={Image4}
                alt=""
            />
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
    <section className='space-y-4 pb-12 min-h-[30vh]'>
        <div className='w-[85%] m-auto '>


    {type === "" && (
        <div className=' flex text-center justify-center py-8  flex-col
       space-y-6
       items-center'>
       <h2 className= "flex gap-5 items-center font-semibold text-black">
          <span className="h-4 w-4 text-center bg-orange rounded-md"></span> Recent Work Completed
        </h2>
        <p className='font-bold text-3xl'>Work Showcase</p>
    </div>
      )
    }
   


       <AliceCarousel mouseTracking 
       infinite
       autoPlayInterval={1000}
       animationDuration={1000}
       disableDotsControls
       autoPlay
       responsive={responsive}
       className="hover:border-2 border-orange"
       items={items} />


       

        </div>

    </section>
  )
}

export default ShowCase