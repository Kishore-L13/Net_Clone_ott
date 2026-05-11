import React from "react";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
const approuter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },{
        path:"/Browse",
        element:<Browse/> 
    }
])
const Body = ()=>{
    return(
        <div>
     <RouterProvider router={approuter} />
        </div>
    )
}
export default Body