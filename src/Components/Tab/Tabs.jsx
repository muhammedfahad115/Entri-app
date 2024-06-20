import React, { useState } from 'react';
import './Tab.css';
import { Link } from 'react-router-dom';

const Tab = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="w-full sm:px-6">
      <div className="flex space-x-4 ">
        <Link to="/home/weather">
        <div 
          className={`tab cursor-pointer py-2 ${activeTab === 1 ? 'active' : ''}`} 
          onClick={() => setActiveTab(1)}
        >
          Weather
        </div>
        </Link>
        <Link to={"/home/localnews"}>
        <div 
          className={`tab cursor-pointer py-2 ${activeTab === 2 ? 'active' : ''}`} 
          onClick={() => setActiveTab(2)}
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
