import { AuthContext } from '@components/pages/_app';
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Navbar = () => {
  const {authState} = useContext(AuthContext);
  
  return (
    <div className='w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between text-center items-center w-full h-full px-10 2xl:px-20 '>
        <Image src="/../public/images/logow-02.png" alt='/' width='110' height='40' />  
        <div className='text-[#ffffff]'>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b border-b-[#109c11] pt-2'>Home</li>
            </Link>
            <Link href='/Challenges'>
              <li className='ml-10 text-sm uppercase hover:border-b border-b-[#109c11] pt-2'>Challenges</li>
            </Link>
            <Link href='/Scoreboard'>
              <li className='ml-10 text-sm uppercase hover:border-b border-b-[#109c11] pt-2'>Scoreboard</li>
            </Link>
            <Link href={authState.isAuthenticated ?"" : '/Login'}>
              <li className='ml-10 text-sm uppercase hover:border-b border-b-[#109c11] pt-2'>{authState.isAuthenticated ? authState.user.displayName :"Log In"}</li>
            </Link>
            <Link href='/Signup'>
                <button className='bg-[#ecf0f3] text-sm w-[120px] ml-20 rounded mx-auto py-2 text-[#109c11] hover:scale-105 ease-in duration-100'>
                    Get Started</button>
            </Link>
          </ul>
        </div> 
        </div> 
        
    </div>
  )
}

export default Navbar