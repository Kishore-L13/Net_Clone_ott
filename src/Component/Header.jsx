import React, { useEffect } from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utilis/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utilis/useSlice";
import { logo, profile_pic } from "../Utilis/Constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  // CHANGED HERE: Moved the Auth listener into Header inside useEffect
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User signed in -> update Redux and redirect to Browse
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/Browse"); 
      } else {
        // User signed out -> clear Redux and redirect to Login
        dispatch(removeUser());
        navigate("/"); 
      }
    });

    // Clean up listener when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignout = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  return (
    <div className="absolute w-screen px-8 py-2 `bg-gradient-to-b` from-black z-10 flex justify-between items-center">
      <img
        className="w-44" src={logo}
        alt="logo"
      />
      
      {user && (
        <div className="flex gap-4">
         <span className="text-white font-medium">{user?.displayName}</span>
          <img src={profile_pic}
          alt="profile" />
          <button onClick={handleSignout} className="bg-red-600 text-white px-4 py-1 rounded-md">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;