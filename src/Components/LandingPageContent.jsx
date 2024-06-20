import React from 'react'
import weatherImage from '../assets/Images/weatherImage.jpeg'
function LandingPageContent() {
  return (
    <div className=' sm:px-6 py-3 flex sm:flex-row flex-wrap flex-col justify-center  gap-3 '>
        <div className=' md:w-[400px] w-[500px] h-[500px]  '><img className='w-[100%]' src={weatherImage}/></div>
        <div className=' w-[500px] h-[500px]  bg-gray-300'><h1>LocalNews</h1></div>
    </div>
  )
}

export default LandingPageContent