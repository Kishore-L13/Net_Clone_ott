import { useSelector } from "react-redux";
// 1. FIXED: Point this import to your actual custom hook file instead of the slice
import useMovieTrailer from '../CustomHooks/useMovieTrailer'

const Videobackground = ({ movieId }) => {
  // 2. Fetch the trailer data from your Redux store
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // 3. Execute your custom hook to fetch data and update the Redux store
  useMovieTrailer(movieId);

  // 4. Safety Guard: If Redux hasn't received the trailer data yet, don't try to render the iframe
  if (!trailerVideo) return <div className="w-screen aspect-video bg-black"></div>;

  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Videobackground;