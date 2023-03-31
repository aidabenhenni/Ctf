import Link from 'next/link'
import React from 'react'
import Footer from './Footer'

const Table = () => {
  return (
    <>
    <div>
    <div className='relative flex mb-6'>
     <table className='w-auto mr-10 bg-gray-100 shadow-xl justify-center items-center py-4'>
        <thead>
            <tr className='border border-solid broder-l-0 broder-r-0'>
                <th className='py-2 px-8 text-xl'>#</th>
                <th className='py-2 px-8 text-xl'>Team name</th>
                <th className='py-2 px-8 pl-40 text-xl'>Points</th>
            </tr>
        </thead>
        <tbody>
            <tr className='border-b'>
                <th className='py-2 px-8 text-xl'>1</th>
                <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>TeamN</th>
                <td className='py-2 px-8 pl-40 text-xl'>10</td>
            </tr>
            <tr className='border-b'>
              <th className='py-2 px-8 text-xl'>2</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>TeamN</th>
              <td className='py-2 px-8 pl-40 text-xl'>8</td>
            </tr>
            <tr className='border-b'>
              <th className='py-2 px-8 text-xl'>3</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>TeamN</th>
              <td className='py-2 px-8 pl-40 text-xl'>6</td>
            </tr>
            <tr className='border-b'>
              <th className='py-2 px-8 text-xl'>4</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>TeamN</th>
              <td className='py-2 px-8 pl-40 text-xl'>4</td>
            </tr>
            <tr>
              <th className='py-2 px-8 text-xl'>5</th>
              <th className='py-2 px-8 text-xl hover:scale-105 ease-in duration-100'>TeamN</th>
              <td className='py-2 px-8 pl-40 text-xl'>2</td>
            </tr>
        </tbody>
     </table>
    </div>
    </div>
</>
  )
}

export default Table