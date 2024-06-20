import { useEffect, useState } from 'react';
import weatherImage from '../assets/Images/weatherImage.jpeg';
import newVideeo from '../assets/Videos/breakingnewsvideo.mp4';
import './LandingpageContent.css'
import { Link } from 'react-router-dom';

function LandingPageContent() {
    const [flip, setFlip] = useState('');

    useEffect(() => {
        console.log(flip)
    }, [flip])

    return (
        <>
           <div className="sm:px-6 py-5 flex sm:flex-row flex-wrap flex-col justify-center gap-5">
                {/* Weather card */}
                <div
                    onMouseEnter={() => setFlip('weather')}
                    onMouseLeave={() => setFlip('')}
                    className={`card w-full sm:w-[500px] h-[400px] sm:h-[450px] ${flip === 'weather' ? 'flipweather' : ''}`}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <img className="w-full h-full object-cover rounded-md" src={weatherImage} alt="Weather" />
                        </div>
                        {/* Weather card back */}
                        <div className="card-back border-2 flex justify-center items-center rounded-md">
                            <div className=''>
                            <h2>Weather Details</h2>
                            <p>Weather details here...</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* News card */}
                <div
                    onMouseEnter={() => setFlip('news')}
                    onMouseLeave={() => setFlip('')}
                    className={`card w-full sm:w-[500px] h-[400px] sm:h-[450px] ${flip === 'news' ? 'flipnews' : ''}`}
                >
                    <div className="card-inner">
                        <div className="card-front">
                            <video className="w-full h-full object-fill rounded-md" autoPlay loop muted src={newVideeo}></video>
                        </div>
                        {/* News card back */}
                        <div className="card-back border-2 flex justify-center items-center rounded-md">
                            <div className=''>
                            <h2>News Details</h2>
                            <p>News details here...</p>
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
