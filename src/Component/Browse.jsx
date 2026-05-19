import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlaying from "../CustomHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";
const Browse = ()=>{
   useNowPlaying()
    return(
        <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        </div>
    )
}
// const Browse = () => {
//   return (
//     // Clean up overflows with overflow-hidden or overflow-x-hidden
//     <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden select-none">
//       <Header />
//       <div className="relative w-full aspect-video bg-black">
//         <Videobackground />
//         <Videotitle />
//       </div>
//       {/* SecondaryContainer will go here later */}
//     </div>
//   );
// };
export default Browse