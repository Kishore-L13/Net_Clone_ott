 import { useEffect } from "react";
 import { API_MOVIE,API_options } from "../Utilis/Constants";
 import { useDispatch } from "react-redux";
 import { addNowPlayingMovies } from "../Utilis/movieSlice";
 const useNowPlaying = ()=>{
 const dispatch = useDispatch();
    const API_Fetch = async()=>{
     try   {const data = await fetch(API_MOVIE,API_options)
        const json = await data.json();
        console.log(json?.results) 
        dispatch(addNowPlayingMovies(json?.results))
    }
    catch(error) {
        console.error("BAD REQUEST",error);
    }
}
    useEffect(()=>{
        API_Fetch()
    },[])
}
export default useNowPlaying