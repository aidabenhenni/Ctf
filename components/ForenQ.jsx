import Image from 'next/image'
import React from 'react'
import { useState } from 'react'



const ForenQ = ({isVisible, onClose}) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'close') onClose () ;
  }

  const handleChange = (event) => {
    event.preventDefault();
  }
  
  
  return (
   <div className='flex flex-col items-center fixed inset-0 bg-[#181C24] bg-opacity-100 justify-center'
   id='close' >
     <div className='flex bg-gray-800 rounded-2xl shadow-2xl flex-col w-2/6 p-5'>
      <button className='text-xl place-self-end'onClick={() => onClose()}>X</button>
      <h2 className='text-3xl mb-4'>Title</h2>
            <div className='bg-white w-[100px] rounded-full justify-center text-center'>
            <h2 className='text-lg mx-auto my-auto text-[#181C24]'>category</h2>
            </div>
       <p className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
       </p>
         <div className='flex py-2'>
          <input className="bg-[#181C24] p-2 text-[#a4b0d4] w-[500px] rounded"
              type={'Flag'} onChange={handleChange} id='Flag' placeholder={'The Flag'} required />
            <button className='bg-[#ecf0f3] text-sm w-[100px] ml-2 rounded py-2 text-[#181C24] hover:scale-105 ease-in duration-100'>Submit</button>
         </div>
     </div>
   </div>
    
  )
}

export default ForenQ