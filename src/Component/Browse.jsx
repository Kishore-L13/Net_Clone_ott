import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlaying from "../CustomHooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import Videobackground from "./Videobackground";
import Videotitle from "./Videotitle";
import MainContainer1 from "./MainContainer1";
const Browse = ()=>{
   useNowPlaying()
    return(
        <div>
        <Header/>
        {/* <MainContainer/> */}
        <MainContainer1/>
        <SecondaryContainer/>
        </div>
    )
}

export default Browse