import Challenge from '@components/components/Challenge'
import Footer from '@components/components/Footer'
import Navbar from 'components/Navbar'
import { Main } from 'next/document'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <>
      <Navbar/>
      <Challenge/>
      <Footer/>
    </>
  )
}