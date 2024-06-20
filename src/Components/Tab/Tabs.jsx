import { useEffect, useState } from 'react';
import './Tab.css';
import { Link, useLocation } from 'react-router-dom';

const Tab = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  // Set the active tab based on the current pathname using the useLocation hook , useState hook and useEffect hook

  useEffect(() => {
    if (location.pathname === '/home/weather') {
      setActiveTab('weather');
    } else if (location.pathname === '/home/localnews') {
      setActiveTab('localnews');
    }
  }, [location.pathname]);



  return (
    <div className="w-full  sm:px-6">
      <div className="flex space-x-4 border-b ">
        <Link to="/home/weather">
        {/* Weather tab */}
        <div 
          className={`tab cursor-pointer py-2 ${activeTab === 'weather' ? 'active' : ''}`} 
          onClick={() => setActiveTab('weather')}
        >
          Weather
        </div>
        </Link>
        {/* Local News tab */}
        <Link to={"/home/localnews"}>
        <div 
          className={`tab cursor-pointer py-2 ${activeTab === 'localnews' ? 'active' : ''}`} 
          onClick={() => setActiveTab('localnews')}
        >
          Local News
        </div>
        </Link>
      </div>
      <div className="mt-4">
      </div>
    </div>
  );
};

export default Tab;
