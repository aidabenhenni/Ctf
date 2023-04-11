import Head from 'next/head'
import Main from 'components/Main'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import { getAuth } from 'firebase/auth'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './_app'


export default function Home() {
  const {authState} = useContext(AuthContext);

  
   return (
    <>
      <Head>
        <title>CTF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Main />
      <Footer />


    </>
  )
}
