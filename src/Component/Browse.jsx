import React, { useEffect } from "react";
import Header from "./Header";
import { API_MOVIE, API_options } from "../Utilis/Constants";
const Browse = ()=>{
    const API_Fetch = async()=>{
     try   {const data = await fetch(API_MOVIE,API_options)
        const result = await data.json();
        console.log(result) 
    }
    catch(error) {
        console.error("BAD REQUEST",error);
    }
}
    useEffect(()=>{
        API_Fetch()
    },[])
    return(
        <div>
        <Header/>
        Browse
        </div>
    )
}
export default Browse