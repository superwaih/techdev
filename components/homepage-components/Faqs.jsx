import React, { useState } from 'react'

const Faqs = ({question, answer}) => {
    const[openFaq, setOpenFaq] = useState(false)
  return (
    <div
    onClick={() => setOpenFaq(!openFaq)}
    
    className='cursor-pointer max-w-2xl bg-white rounded-md py-3 px-2'>
        <div className= {openFaq && `border-b-2  border-red-400 w-full` }>
        <h2 className='font-bold'>{question}</h2>

        </div>

        {openFaq && 
        (<p>
            {answer}


        </p>)}
    </div>
  )
}

export default Faqs