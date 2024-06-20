import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LoadingSpinner from './LoadingSpinner';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function Weather() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);  // intially the loading is true

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const position = await getPosition();
                const { latitude, longitude } = position.coords;

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
                setWeatherData(response.data);
                setLoading(false);  // when the data is fetched, loading is set to false
            } catch (error) {
                console.error('Error fetching weather data:', error);
                setLoading(false);  // if there is an error, loading is set to false
            } 
        };

        fetchWeather();
    }, []);

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    return (
        <>
            <div className="p-4 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Weather Information</h2>
                {loading ? (
                    <LoadingSpinner />  // if loading is true, show the loading spinner
                ) : (
                    <div>
                        {weatherData && (
                            <div>
                                <p>{weatherData.name}, {weatherData.sys.country}</p>
                                <p>{weatherData.weather[0].description}</p>
                                <p>Temperature: {weatherData.main.temp} °C</p>
                                <p>Humidity: {weatherData.main.humidity}%</p>
                            </div>
                        )}
                    </div> 
                )} 
            </div>
        </>
    );
}

export default Weather;
