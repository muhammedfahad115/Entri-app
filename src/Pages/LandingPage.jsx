import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    <Header/>
    <div className=' px-1 sm:px-6'><Outlet/></div>
    </>
  )
}

export default LandingPage