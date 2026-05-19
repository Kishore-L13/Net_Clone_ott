import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../Utilis/Constants"; // Make sure your API options/token path is correct
import { addTrailerVideo } from "../Utilis/movieSlice"; // Imports the action from your slice

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      // 1. Fetch all videos associated with this movie ID from TMDB
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_options
      );
      const json = await data.json();

      // Safety guard: If API fails or results are missing, stop here
      if (!json?.results) return;

      // 2. Filter the results to look specifically for a "Trailer" type
      const filterData = json.results.filter((video) => video?.type === "Trailer");
      
      // 3. Fallback: If no trailer type is found, use the first available video clip
      const trailer = filterData.length ? filterData[0] : json.results[0];

      // 4. Dispatch the trailer object directly into your Redux store
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error("Failed to fetch movie trailer:", error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]); // Runs again if the movieId changes
};

export default useMovieTrailer;