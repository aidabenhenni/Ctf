import Image from 'next/image'
import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1240px] w-full h-full mx-auto justify-center mt-12 text-center'>
            <div>
                <h1 className='text-white py-6 text-center'>
                Capture the <span className='text-[#109c11]'>Flag</span>
                </h1>
                 <p className='py-4 text-gray-600 max-w-[70%] m-auto text-center'>
                  Capture the Flag is a game in which players put their skills to
                  practice to solve problems or break into an opponent's system
                 </p>  
                  <a href='/Signup'>
                   <button className='bg-[#109c11] w-[160px] rounded test-xl my-6 py-2'>
                    Get Started 
                   </button>
                  </a>
                  <div className='border-b-2 w-40 my-6 ml-10'></div> 
                   
                  <div className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 mx-4'>
                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                      <Image className='mx-auto' src="/../public/images/forencics.png" width='80' height='30'/>
                        <h3 className='py-2'>Forensics</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                      <Image className='mx-auto' src="/../public/images/crypto.png" width='90' height='40'/>
                        <h3 className='py-2'>Cryptography</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <Image className='mx-auto' src="/../public/images/we.png" width='100' height='40'/>
                        <h3 className='py-2'>Web Exploitation</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>  
                        <h3>Reverse Engeneering</h3>  
                      </div>
                    </div>

                    <div className='p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                      <div className='items-center justify-center'>
                        <Image className='mx-auto' src="/../public/images/be.png" width='100' height='40'/>
                        <h3 className='py-2 mt-2'>Binary Exploitation</h3>  
                      </div>
                    </div>
                    
                  </div>   
            </div>
        </div> 
        <div className='border-b-2 w-40 my-6 ml-10'></div> 
        <div className='my-6 px-8'>
          <h2 className='text-[#109c11] text-3xl py-6'>How to play</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <h2 className='text-[#109c11] text-3xl py-6'>Tips</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>   
    </div>
  )
}

export default Main