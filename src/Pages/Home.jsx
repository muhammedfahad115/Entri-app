import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'
import Tabs from '../Components/Tab/Tabs'

function Home() {
  return (
    <>
    <Tabs/>
    <div className='sm:px-6 '><Outlet/></div>
    </>
  )
}

export default Home