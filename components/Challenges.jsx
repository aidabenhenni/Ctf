import Image from 'next/image'
import React from 'react'

const Challenges = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-10 flex flex-col justify-center h-full'>
         <h2 className='py-4'>Challenges</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-8'>
            
            <div className='p-20 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                        src='/../public/images/pic.png' 
                        width='2000' 
                        height='2000' 
                        alt='/'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Lorem Ipsum 1</h3>
                    </div>
                </div>
            </div>
           
            <div className='p-20 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className='m-auto'>
                        <Image 
                        src='/../public/images/pic.png' 
                        width='2000' 
                        height='2000' 
                        alt='/'/>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <h3>Lorem Ipsum 2</h3>
                    </div>
                </div>
            </div>
           
         </div>
        </div>
    </div>
  )
}

export default Challenges