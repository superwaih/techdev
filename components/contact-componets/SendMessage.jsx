import React from 'react'

const SendMessage = () => {
  return (
    <div className="contact-form m-auto w-[85%] flex space-y-4 flex-col flex-1">
    <div className="flex gap-3 flex-col md:flex-row justify-between w-full">
      <input
       className='bg-[#C9C9C9] w-full border-[#FF5C00] border rounded-md p-3 placeholder:font-bold placeholder:text-[#595959]' 
      type="text" placeholder="First name" />
      <input 
       className='bg-[#C9C9C9] w-full border-[#FF5C00] border rounded-md p-3 placeholder:font-bold placeholder:text-[#595959]' 
      
      type="text" placeholder="Last name" />
    </div>
    <div className="flex flex-col md:flex-row w-full gap-5 justify-between">
      <input 
       className='bg-[#C9C9C9] border-[#FF5C00] border
       w-full rounded-md p-3 placeholder:font-bold placeholder:text-[#595959]' 
      
      type="text" placeholder="Phone" />
      <input 
       className='bg-[#C9C9C9] border-[#FF5C00] border
       w-full rounded-md p-3 placeholder:font-bold placeholder:text-[#595959]' 
      
      type="text" placeholder="Subject" />
  </div>
  <input type="text" 
       className='bg-[#C9C9C9] border-[#FF5C00] border rounded-md p-12 placeholder:font-bold placeholder:text-[#595959]' 

  
  />
<div className='grid place-content-center'>
  <button className='bg-orange font-bold w-full border py-4 px-12 text-white rounded-[48px]'>Send a Message</button>

</div>
    
  </div>
  )
}

export default SendMessage