import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 md:px-12 py-4">
      <h1 className="text-lg md:text-2xl font-semibold pb-4 text-white">{title}</h1>
      
      {/* Scrollable Container */}
      <div className="flex overflow-x-scroll no-scrollbar scroll-smooth">
        <div className="flex">
          {/* Loop over your movie array using .map() */}
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;