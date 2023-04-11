import Challenges from '@components/components/Challenges'
import Footer from '@components/components/Footer'
import Navbar from 'components/Navbar'
import React, { useContext } from 'react'
import { AuthContext } from './_app'

export default function ChallengesPage() {
  const {authState} = useContext(AuthContext);

  return (
    <>
      <Navbar  />
      <Challenges/>
      <Footer/>
    </>
  )
}