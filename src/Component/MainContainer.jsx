import React from "react";
import Videobackground from "./Videobackground"
import Videotitle from "./Videotitle"
import { useSelector } from "react-redux";
const MainContainer = ()=>{
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies)
   if(movies === null) return;
   const mainMovie = movies[0];
   console.log(mainMovie)
    return(
        <div>
            <Videobackground/>
            <Videotitle/>
        </div>
    )
}
export default MainContainer