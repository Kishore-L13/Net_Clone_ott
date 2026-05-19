import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 w-full aspect-video pt-[24%] px-6 md:px-16 bg-gradient-to-r from-black via-black/50 to-transparent text-white z-10 flex flex-col justify-center animate-fade-in">
      
      {/* 1. Renders the dynamic title coming from the API */}
      <h1 className="text-xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg">
        {title}
      </h1>
      
      {/* 2. Renders the dynamic description overview coming from the API */}
      <p className="hidden md:inline-block py-4 text-sm md:text-md lg:text-lg w-full md:w-2/5 lg:w-1/3 text-gray-200 drop-shadow-md leading-relaxed">
        {overview}
      </p>
      
      {/* Buttons Container */}
      <div className="flex gap-3 mt-2 md:mt-4">
        <button className="bg-white text-black py-1 md:py-2 px-4 md:px-8 text-md md:text-xl rounded-md font-bold hover:bg-opacity-80 transition duration-200 flex items-center justify-center gap-2 shadow-md">
          <span>▶</span> Play
        </button>
        <button className="bg-gray-500 text-white py-1 md:py-2 px-4 md:px-8 text-md md:text-xl bg-opacity-60 rounded-md font-bold hover:bg-opacity-40 transition duration-200 flex items-center justify-center gap-2 shadow-md backdrop-blur-sm">
          <span>ℹ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;