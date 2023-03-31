import React from 'react'

const Main = () => {
  return (
    <div className='w-full lg:h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto justify-center p-2 flex items-center'>
            <div>
               <p className='upercase tracking-widest text-xl text-gray-600'>Let's hack together</p>
               <h1 className='py-4 text-gray-700'>
                Capture the <span className='text-red-500'>Flag</span></h1>
                <p className='py-2 text-gray-600 max-w-[70%] m-auto'>
                  Capture the Flag is a game in which players put their skills to
                  practice to solve problems or break into an opponent's system </p>
                  

                  <button className='bg-[#244793] w-[200px] rounded-3xl test-xl uppercase my-6 mx-auto py-3 text-white hover:scale-105 ease-in'>
                    Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Main