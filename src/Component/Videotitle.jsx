import React from "react";

const Videotitle = () => {
  return (
    // Changed px-12 to px-6 or px-12 to match your Header logo alignment
    <div className="absolute top-0 left-0 w-full aspect-video pt-[24%] px-6 md:px-16 bg-gradient-to-r from-black via-black/50 to-transparent text-white z-10 flex flex-col justify-center">
      
      {/* Movie Title */}
      <h1 className="text-xl md:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg">
        The Punisher: One Last Kill
      </h1>
      
      {/* Movie Description */}
      <p className="hidden md:inline-block py-4 text-sm md:text-md lg:text-lg w-full md:w-2/5 lg:w-1/3 text-gray-200 drop-shadow-md leading-relaxed">
        As Frank Castle searches for meaning beyond revenge, an unexpected force pulls him back into the fight.
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

export default Videotitle;