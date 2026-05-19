import React from "react";
import Videobackground from "./Videobackground"
import Videotitle from "./Videotitle"
import { useSelector } from "react-redux";
const MainContainer = ()=>{
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
   if(movies === null) return;
   const mainMovie = movies[0];
   console.log(mainMovie)
    const { original_title, overview, id } = mainMovie;

  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  );
};
export default MainContainer