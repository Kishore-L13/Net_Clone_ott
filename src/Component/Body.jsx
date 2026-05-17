import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Browse",
    element: <Browse />,
  },
]);

const Body = () => {
  // Clean & simple: Body ONLY returns the provider now
  return <RouterProvider router={approuter} />;
};

export default Body;