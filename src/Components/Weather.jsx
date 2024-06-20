import React, { useEffect, useState } from 'react'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
function Weather() {
    console.log("API_KEY", API_KEY)
    const [weatherData, setWeatherData] = useState(null);
    useEffect(() => {
        
    }, [])
  return (
    <>
    </>
  )
}

export default Weather