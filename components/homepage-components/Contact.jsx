import React from 'react'

const Contact = () => {
  return (
    <div className="contact w-[85%] pb-8 m-auto gap-4 flex md:flex-row flex-col">
    <div className=" flex-1  py-8 flex flex-col space-y-6">
      <h2 className="flex gap-3 items-center  font-semibold text-black">
        <span className="h-4 w-4 bg-orange rounded-md"></span> Contact Us
      </h2>
      <p className="font-bold text-3xl">Get in touch with the agency</p>
      <div className='flex flex-col md:flex-row'>
        <div className='box p-2 flex-1'>
          <p className='font-semibold'>
            There are many variations of passages of Lorem Ipsum available,
            but the majority have in some form.
          </p>
          <p className='font-bold'>35,600</p>
          <p className='text-orange font-bold'>Projects Completed</p>
        </div>
        <div className='box flex-1 flex flex-col bg-[#D9D9D9] rounded-md p-6'>
            <h2 className='font-bold text-center text-orange text-2xl'>Boston</h2>
          <p className='font-semibold'>
          5 Federal street boston
techdev@gmail.com
          </p>
          <p>47 6678 381</p>
        </div>
      </div>
    </div>
    <div className="contact-form flex space-y-4 flex-col flex-1">
      <div className="flex gap-3 flex-col md:flex-row justify-between w-full">
        <input
         className='bg-[#D9D9D9] w-full rounded-md p-3 placeholder:font-bold placeholder:text-black' 
        type="text" placeholder="First name" />
        <input 
         className='bg-[#D9D9D9] w-full rounded-md p-3 placeholder:font-bold placeholder:text-black' 
        
        type="text" placeholder="Last name" />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-5 justify-between">
        <input 
         className='bg-[#D9D9D9] w-full rounded-md p-3 placeholder:font-bold placeholder:text-black' 
        
        type="text" placeholder="Phone" />
        <input 
         className='bg-[#D9D9D9] w-full rounded-md p-3 placeholder:font-bold placeholder:text-black' 
        
        type="text" placeholder="Subject" />
    </div>
    <input type="text" 
         className='bg-[#D9D9D9] rounded-md p-12 placeholder:font-bold placeholder:text-black' 

    
    />
    <button className='bg-orange duration-300 hover:text-black hover:border-2 hover:border-orange hover:bg-inherit font-bold w-full md:w-1/2 border py-4 px-12 text-white rounded-[48px]'>Send a Message</button>

      
    </div>
  </div>
  )
}

export default Contact