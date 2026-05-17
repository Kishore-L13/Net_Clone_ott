import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilis/Firebase"; // Using this instance directly
import { useDispatch } from "react-redux"; // Fixed: Added missing import
import { addUser, removeUser } from "../Utilis/useSlice";

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
  const dispatch = useDispatch();

  useEffect(() => {
    // onAuthStateChanged returns an unsubscribe function
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    // Fixed: Clean up the event listener on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
};

export default Body;