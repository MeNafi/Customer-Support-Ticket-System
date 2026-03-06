import React from 'react';
import bgBanner from '../assets/bgBanner.jpg';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div 
      className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl bg-cover bg-center mb-10"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <div className="flex-1 bg-indigo-600/90 backdrop-blur-sm rounded-xl p-10 text-center text-white shadow-xl">
        <h3 className="text-xl font-medium opacity-90">In-Progress</h3>
        <p className="text-6xl font-bold mt-2">{inProgressCount}</p>
      </div>

      <div className="flex-1 bg-emerald-500/90 backdrop-blur-sm rounded-xl p-10 text-center text-white shadow-xl">
        <h3 className="text-xl font-medium opacity-90">Resolved</h3>
        <p className="text-6xl font-bold mt-2">{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;