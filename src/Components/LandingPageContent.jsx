import React from 'react'

function LandingPageContent() {
  return (
    <div className='px-6 py-3 sm:flex gap-3 '>
        <div className='w-1/2 p-2 bg-gray-300 '>
        <div className='flex justify-center'><h1>Weather</h1></div>
        </div>
        <div className='w-1/2 p-2 bg-gray-300 '>
        <div className='flex justify-center'><h1>LocalNews</h1></div>
        </div>
    </div>
  )
}

export default LandingPageContent