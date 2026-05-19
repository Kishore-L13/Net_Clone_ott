import React from "react";
import { IMG_CDN_URL } from "../Utilis/Constants";

const MovieCard = ({ posterPath }) => {
  // Safety guard: if a movie doesn't have a poster path, don't render it
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4 transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img 
        className="rounded-md shadow-md"
        alt="Movie Card" 
        src={IMG_CDN_URL + posterPath} 
      />
    </div>
  );
};

export default MovieCard;