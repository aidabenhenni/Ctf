import Image from 'next/image'
import React from 'react'
import Table from './Table'

const Challenge = () => {
  return (
    <div>
        <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-10 flex flex-col justify-center h-full'>
         <h2 className='py-4'>Challenges</h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-2 gap-4'>

            <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className=''>
                        <Image 
                        src='/../public/images/pic.png' 
                        width='150' 
                        height='150' 
                        alt='/'/>
                    </div>
                    <div className='items-center justify-center'>
                        <h3>Lorem Ipsum 1</h3>
                        
                    </div>
                </div>
            </div>
           
            <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className=''>
                        <Image 
                        src='/../public/images/pic.png' 
                        width='150' 
                        height='150' 
                        alt='/'/>
                    </div>
                    <div className='items-center justify-center'>
                        <h3>Lorem Ipsum 2</h3>
                    </div>
                </div>
            </div>

            <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className=''>
                        <Image 
                        src='/../public/images/pic.png' 
                        width='150' 
                        height='150' 
                        alt='/'/>
                    </div>
                    <div className='items-center justify-center'>
                        <h3>Lorem Ipsum 3</h3>
                    </div>
                </div>
            </div>

            <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                    <div className=''>
                        <Image 
                        src='/../public/images/pic.png' 
                        width='150' 
                        height='150' 
                        alt='/'/>
                    </div>
                    <div className='items-center justify-center'>
                        <h3>Lorem Ipsum 4</h3>
                    </div>
                </div>
            </div>

           
         </div>
        </div>
    </div>
        <div className='w-full lg:h-screen p-2'>
        <div className='max-w-[1240px] mx-10 justify-center h-full'>
         <h2 className='py-4'>Results</h2>
         <Table/>
         </div>
           
         </div>
    </div>
  )
}

export default Challenge