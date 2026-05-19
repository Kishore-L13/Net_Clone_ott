import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  // Grab all different movie categories from your Redux store
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="py-45 bg-black text-white w-full">
        {/* Negative margin overlays these lists on top of the Video Banner */}
        <div className="-mt-16 md:-mt-48 lg:-mt-56 relative z-20 pl-4 md:pl-12">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          {/* Add more lists here as you fetch more endpoints */}
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;