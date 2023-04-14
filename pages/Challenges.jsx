import Challenges from '@components/components/ForenQ'
import Footer from '@components/components/Footer'
import Navbar from 'components/Navbar'
import React, { Fragment, useContext } from 'react'
import { AuthContext } from './_app'
import ForenQ from '@components/components/ForenQ'
import { useState } from 'react'


export default function ChallengesPage() {
  const {authState} = useContext(AuthContext);
  const [showQuest,setshowQuest] = useState(false);

  return (
    <>
      <Navbar  />
      <div className='w-full h-full p-2'>
          <div className='mx-4 flex flex-col py-6 h-full'>
            <h2 className='py-4'>Challenges</h2>
              <div>
               <h3 className='my-4 border-b border-b-[#109c11] text-[#109c11] text-2xl' >Forencics</h3>
                <div className='grid md:grid-cols-2 lg:grid-cols-8 gap-4 mx-2'>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 1</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 2</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 3</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 4</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 5</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 6</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 7</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 8</button>
               <button className='bg-gray-800 p-4' onClick={() => setshowQuest(true)}>Question 9</button>
                </div>
               <ForenQ isVisible={showQuest}/>
              </div> 
              <div>
               <h3 className='my-4 border-b border-b-[#109c11] text-[#109c11] text-2xl' >Cryptography</h3>
               <button onClick={() => setshowQuest(true)}>Question 1</button>
              </div> 
              <div>
               <h3 className='my-4 border-b border-b-[#109c11] text-[#109c11] text-2xl' >Web Exploitation</h3>
               <button onClick={() => setshowQuest(true)}>Question 1</button>
               
              </div> 
              <div>
               <h3 className='my-4 border-b border-b-[#109c11] text-[#109c11] text-2xl' >Reverse engineering</h3>
               <button onClick={() => setshowQuest(true)}>Question 1</button>
               
              </div> 
              <div>
               <h3 className='my-4 border-b border-b-[#109c11] text-[#109c11] text-2xl' >Binary Exploitation</h3>
               <button onClick={() => setshowQuest(true)}>Question 1</button>
               
              </div> 
          </div>     
      </div>
      <Fragment/>
      <Footer/>
    </>
  )
}