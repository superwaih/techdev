import React from 'react'
import Image from 'next/image'
import image1 from "../imgs/swipeimgs/image1.png"
const ChatBox = () => {
  return (
    <div className='m-auto flex flex-col md:flex-row pb-20 md:pb-32  w-[85%]'>
        <div className='bg-black flex-1 text-white py-12 rounded-md
        px-12 space-y-8'>
            <div className='font-bold text-xl md:text-3xl' >
                <h3>Got a project?</h3>
                <h4>Let's talk</h4>
            </div>
            <p  className='leading-[45px] text-xl ,md:text-2xl font-bold max-w-md'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
        </div>
        <div className='flex-1 md:relative md:mt-4 md:mb-4 bg-orange'>
            
                <Image
                    width={400}
                    height={0}
                    objectFit="cover"
                    src={image1}
                    alt=""
                    className='md:absolute top-8 rounded-md -left-[10%]'
                />
            

        </div>
    </div>
  )
}

export default ChatBox