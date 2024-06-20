import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../Context/UserContext'
import { Link, useLocation } from 'react-router-dom';

function Header() {


  return (
    <>
    <div className='w-full sm:flex h-auto p-6 items-center justify-between bg-[lightblue]'>
        <div><h1 className='text-3xl font-bold '>Entri App</h1></div>
        <div><input className='w-80 py-2 outline-none px-4  rounded-md' type="text" /></div>
    </div>
    </>
  )
}

export default Header