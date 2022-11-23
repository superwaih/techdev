import React from 'react'
import Image from 'next/image'
import FaqBg from "../imgs/faqimage.png"
import Faqs from './Faqs'

const FaqBanner = () => {
  return (
    <section className='bg-[#D9D9D9]'>
    <div className='m-auto w-full md:w-[90%] items-center pb-8 justify-between flex flex-col-reverse md:flex-row'>
   <div className='flex flex-col md:w-3/5 px-12 py-8
   space-y-6
   '>
   <h2 className="flex flex-1 gap-3 md:max-w-md  items-center  font-semibold text-black">
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



   <div className='relative w-full flex-1'>
    <Image
      width={0}
      height={0}
      src={FaqBg}
      alt=""
    />
    <div className='bg-orange right-0 p-3 lg:p-8 rounded-md absolute text-white font-semibold bottom-0'>
    Our agency is one of the most successful agency.
    </div>

   </div>
   

    </div>

</section>
  )
}

export default FaqBanner