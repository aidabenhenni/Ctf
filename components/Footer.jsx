import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import {
    FaFacebookSquare,
    FaInstagram,
    FaLinkedinIn,
    FaTiktok,
    FaTwitterSquare,
    FaYoutube,
  } from 'react-icons/fa';
  

const Footer = () => {
  return (
    <div className='w-full mb-4 mx-auto px-4 text-white items-center'>
      <div className='items-center mx-80 px-40 text-center'>
        <div className='flex justify-between items-center pt-5 space-x-2'>

            <a href="https://www.facebook.com/enstcs/"><FaFacebookSquare size={20} /></a>
            <a href='https://www.instagram.com/ensteins_club/'><FaInstagram size={20} /></a>
            <a href='https://www.tiktok.com/@club_ensteins2023?_t=8ahe4najm9m&_r=1'><FaTiktok size={20} /></a>
            <a href='https://www.youtube.com/@ensteinsclub3265'><FaYoutube size={20} /></a>
            <a href='https://www.linkedin.com/company/ensteins-club/mycompany/'><FaLinkedinIn size={20} /></a>
            <p>ensteins_club</p>
        </div>
      </div>
    </div>
  )
}

export default Footer