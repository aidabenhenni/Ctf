import Image from 'next/image'
import React from 'react'

const Challenge = () => {
  return (
    <div>
        <div className='w-full lg:h-screen p-2'>
        <div className='mx-4 flex flex-col py-6 h-full'>
         <h2 className='py-4'>Challenges</h2>

         <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 mx-4'>
                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <h3>Forensics</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <h3>Cryptography</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <h3>Web Exploitation</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <h3>Reverse Engeneering</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <h3>Binary Exploitation</h3>  
                      </div>
                    </div>
                    </div>           
            </div>            
        </div>
    </div>
  )
}

export default Challenge