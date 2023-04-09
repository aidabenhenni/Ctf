import Link from 'next/link'
import React from 'react'
import Navbar from '@components/components/Navbar'
import Footer
 from '@components/components/Footer'
const Table = () => {
  return (
    <>
    <Navbar/>
    <div className='w-full h-screen p-2'>
    <h2 className='py-4'>Scoreboard</h2>
    <div className='mb-6 justify-center items-center max-w-[1240px] w-full h-full'>
     <table className='bg-gray-800 shadow-xl py-4 w-full'>
        <thead>
            <tr className='border-b'>
                <th className='py-2 px-8 text-xl'>#</th>
                <th className='py-2 px-8 text-xl'>Name</th>
                <th className='py-2 text-xl'>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border-b'>
                <th className='py-2 px-8 text-xl'>1</th>
                <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>N</th>
                <td className='py-2 px-8 pl-80 text-xl'>10</td>
            </tr>
            <tr className='border-b'>
              <th className='py-2 px-8 text-xl'>2</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>N</th>
              <td className='py-2 px-8 pl-80 text-xl'>8</td>
            </tr>
            <tr className='border-b'>
              <th className='py-2 px-8 text-xl'>3</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>N</th>
              <td className='py-2 px-8 pl-80 text-xl'>6</td>
            </tr>
            <tr className='border-b'>
              <th className='py-2 px-8 text-xl'>4</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>N</th>
              <td className='py-2 px-8 pl-80 text-xl'>4</td>
            </tr>
            <tr>
              <th className='py-2 px-8 text-xl'>5</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>N</th>
              <td className='py-2 px-8 pl-80 text-xl'>2</td>
            </tr>
        </tbody>
     </table>
    </div>
    </div>
    <Footer/>
</>
  )
}

export default Table