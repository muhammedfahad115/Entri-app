import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Tabs from '../Components/Tab/Tabs';
import backButton from '../assets/Images/backButton.png';

function Home() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false); // state to track  if the screen is being scrolled or not 

    // function to handle the back button click and scroll to the top of the page
    const handleBackClick = () => {
        if (isScrolled) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate(-1);
        }
    };

    useEffect(() => {
        // function to handle the scroll event of the window
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = (scrollTop / documentHeight) * 100;

            if (scrollPercentage > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll); // adding the scroll event listener to the window when the component mounts

        return () => {
            window.removeEventListener('scroll', handleScroll); // removing the scroll event listener from the window when the component unmounts
        };
    }, []);

    return (
        <>
            <Tabs />
            <div className='sm:px-6'>
                <Outlet />
            </div>
            <div className='flex justify-end fixed bottom-10 right-10'>
                <button onClick={handleBackClick} className={`transform transition-transform ${isScrolled ? 'rotate-90' : ''}`}>
                    <img className='w-14 dmd:w-16 md:w-20' src={backButton} title='Back' alt='Back' />
                </button>
            </div>
        </>
    );
}

export default Home;
