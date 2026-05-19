import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Videobackground from "./Videobackground"
import Videotitle from "./Videotitle"

const MainContainer1 = () => {
  // 1. Grab all now playing movies from your Redux store
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  
  // 2. Local state to track the index of the currently active movie
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  // 3. Set up a timer to cycle through the movies array automatically
  useEffect(() => {
    // If there are no movies, or less than 2, don't start a timer
    if (!movies || movies.length === 0) return;

    const timer = setInterval(() => {
      setCurrentMovieIndex((prevIndex) => 
        // If we reach the last movie, loop back to the first one (0)
        prevIndex === movies.length - 1 ? 0 : prevIndex + 1
      );
    }, 36000); // 12000ms = 12 seconds per trailer (gives YouTube time to load and play)

    // Clear the timer when the component unmounts to prevent memory leaks
    return () => clearInterval(timer);
  }, [movies]);

  // Early return safety check
  if (!movies || movies.length === 0) return null;

//   // 4. Get the active movie dynamically based on the state index
//   const currentMovie = movies[currentMovieIndex];
//   const { original_title, overview, id } = currentMovie;
// This dynamically grabs the next movie object from the array
  const currentMovie = movies[currentMovieIndex];
  
  // Destructure TMDB data fields
  const { original_title, overview, id } = currentMovie;

  return (
    // CRITICAL: The key must be 'id'. When 'id' changes, React resets EVERYTHING inside here!
    <div key={id} className="relative w-screen aspect-video bg-black">
      <Videotitle title={original_title} overview={overview} />
      <Videobackground movieId={id} />
    </div>
  )
};

export default MainContainer1;