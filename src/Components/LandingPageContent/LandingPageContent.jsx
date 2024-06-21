import { useState } from 'react';
import weatherImage from '../../assets/Images/weatherImage.jpeg';
import newVideeo from '../../assets/Videos/breakingnewsvideo.mp4';
import './LandingpageContent.css'
import { Link } from 'react-router-dom';

function LandingPageContent() {
    const [flip, setFlip] = useState('');

    return (
        <>
            <div className="sm:px-6 py-5 flex sm:flex-row flex-wrap flex-col justify-center gap-5">
                {/* Weather card */}
                <div
                    onMouseEnter={() => setFlip('weather')} // onmouseenter is used to flip the card
                    onMouseLeave={() => setFlip('')} // onmouseleave is used to flip the card back
                    className={`card w-full sm:w-[500px] h-[400px] sm:h-[450px] ${flip === 'weather' ? 'flipweather' : ''}`}
                >
                    {/* Weather card inner */}
                    <div className="card-inner">
                        <div className="card-front">
                            <img className="w-full h-full object-cover rounded-md" src={weatherImage} alt="Weather" />
                        </div>
                        {/* Weather card back */}
                        <div className="card-back border-2 flex justify-center items-center rounded-md">
                            <div className='p-4 text-center'>
                                <h2 className="text-2xl font-bold mb-4">Weather Details</h2>
                                <p className="mb-2">Stay updated with the latest weather information from OpenWeatherMap.</p>
                                <ul className="list-disc list-inside text-left">
                                    <li className="mb-1 text-sm sm:text-base">Real-time weather updates based on your current location.</li>
                                    <li className="mb-1 text-sm sm:text-base">Get detailed weather descriptions and conditions.</li>
                                    <li className="mb-1 text-sm sm:text-base">Temperature displayed in Celsius for easy interpretation.</li>
                                    <li className="mb-1 text-sm sm:text-base">Information on humidity levels to help you plan your day.</li>
                                    <li className="mb-1 text-sm sm:text-base">Accurate weather forecasts to keep you prepared.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* News card */}
                <div
                    onMouseEnter={() => setFlip('news')} // onmouseenter is used to flip the card
                    onMouseLeave={() => setFlip('')} // onmouseleave is used to flip the card back
                    className={`card w-full sm:w-[500px] h-[400px] sm:h-[450px] ${flip === 'news' ? 'flipnews' : ''}`}
                >
                    {/* News card inner */}
                    <div className="card-inner">
                        <div className="card-front">
                            <video className="w-full h-full object-fill rounded-md" autoPlay loop muted src={newVideeo}></video>
                        </div>
                        {/* News card back */}
                        <div className="card-back border-2 flex  justify-center items-center rounded-md">
                            <div className='p-5 text-center'>
                                <h2 className=" text-2xl font-bold mb-4">News Details</h2>
                                <p className="mb-2">Stay informed with the latest news from around the world.</p>
                                <ul className="list-disc list-inside text-left">
                                    <li className="mb-1 text-sm sm:text-base">Get the latest news updates from trusted sources like NewsAPI and GNews.</li>
                                    <li className="mb-1 text-sm sm:text-base">Search for news based on your interests and keywords.</li>
                                    <li className="mb-1 text-sm sm:text-base">Filter news articles by language to suit your preference.</li>
                                    <li className="mb-1 text-sm sm:text-base">Sort news by publication date to see the most recent stories.</li>
                                    <li className="mb-1 text-sm sm:text-base">Stay updated on global events and local happenings.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center mb-5">
                <Link to="/home/weather"><button className="bg-blue-500 text-white p-2 rounded-md active:scale-95">Get Started</button></Link>
            </div>
        </>
    );
}

export default LandingPageContent;
