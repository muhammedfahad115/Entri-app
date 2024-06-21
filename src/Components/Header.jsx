import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/UserContext'
import { Link, useLocation } from 'react-router-dom';

function Header() {


  return (
    <>
    <div className='w-full flex h-auto p-3 sm:p-6 items-center justify-between bg-[lightblue]'>
        <div><h1 className='text-3xl font-bold '>Entr<span className='text-orange-600'>i</span> App</h1></div>
    </div>
    </>
  )
}

export default Header