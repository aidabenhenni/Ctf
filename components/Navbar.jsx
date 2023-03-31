import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-[#244793]'>
        <div className='flex justify-between text-center items-center w-full h-full px-10 2xl:px-20 '>
        <Image src="/../public/images/navbarlogo.png" alt='/' width='110' height='40' />  
        <div className='text-[#ffffff]'>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b pt-2'>Home</li>
            </Link>
            <Link href='/Challenges'>
              <li className='ml-10 text-sm uppercase hover:border-b pt-2'>Challenges</li>
            </Link>
            <Link href='/Login'>
              <li className='ml-10 text-sm uppercase hover:border-b pt-2'>Log In</li>
            </Link>
            <Link href='/'>
              <li>
                <button className='bg-[#ecf0f3] uppercase text-sm w-[120px] ml-20 rounded-3xl mx-auto py-2 text-[#244793] hover:scale-105 ease-in duration-100'>
                    Get Started</button></li>
            </Link>
          </ul>
        </div> 
        </div> 
        
    </div>
  )
}

export default Navbar