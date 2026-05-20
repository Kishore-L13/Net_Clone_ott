 import { useEffect } from "react";
 import { API_MOVIE_Popular,API_options } from "../Utilis/Constants";
 import { useDispatch } from "react-redux";
 import { addPopularMovies } from "../Utilis/movieSlice";
 const usePopularMovies = ()=>{
 const dispatch = useDispatch();
    const API_Fetch = async()=>{
     try   {const data = await fetch(API_MOVIE_Popular,API_options)
        const json = await data.json();
        console.log("Popular",json?.results) 
        dispatch(addPopularMovies(json?.results))
    }
    catch(error) {
        console.error("BAD REQUEST",error);
    }
}
    useEffect(()=>{
        API_Fetch()
    },[])
}
export default usePopularMovies