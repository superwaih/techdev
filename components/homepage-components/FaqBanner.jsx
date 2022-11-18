import React from 'react'
import Image from 'next/image'
import FaqBg from "../imgs/faqimage.png"
import Faqs from './Faqs'

const FaqBanner = () => {
  return (
    <section className='bg-[#D9D9D9] min-h-[40vh]'>
    <div className=' flex flex-col-reverse md:flex-row justify-between'>
   <div className='flex-1 flex flex-col px-12 py-8
   space-y-6
   '>
   <h2 className="flex gap-3 items-center  font-semibold text-black">
      <span className="h-4 w-4 bg-orange rounded-md"></span> Frequently Asked Questions
    </h2>
    <p className='font-bold text-3xl'>We’re here to change your business look</p>

    <Faqs
    question={"Few resons why you should choose us"}
    answer={"Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl."}
    />
     <Faqs
    question={"Few resons why you should choose us"}
    answer={"Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl."}
    />
     <Faqs
    question={"Few resons why you should choose us"}
    answer={"Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vitae commodo nisl."}
    />
   </div>



   <div className='flex-1 pb-8'>
    <Image
      width={0}
      height={0}
      objectFit="cover"
      src={FaqBg}
      alt=""
    />
   </div>
   

    </div>

</section>
  )
}

export default FaqBanner