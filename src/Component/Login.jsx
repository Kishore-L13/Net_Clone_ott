import Header from "./Header";
import React, { useState } from "react"; // Don't forget to import useState

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
        <div>
             <Header/>
             <img src="https://assets.nflxext.com/ffe/siteui/vlv3/76c5a455-c62c-46d4-8653-3924728113e3/web/IN-en-20260504-TRIFECTA-perspective_596176fe-3b1e-48ec-8a00-a0acb34e68f1_medium.jpg"
             alt="background"
       /></div>
    <form className="absolute top-1/2 left-1/2 -translate-x-1/2 
    -translate-y-1/2 bg-black/80 p-12 w-full max-w-md rounded-lg text-white">
      <h1 className="text-3xl font-bold mb-8">
        {isSignInForm ? "Sign In" : "Sign Up"}
      </h1>

      {/* Conditional Input for Sign Up */}
      {!isSignInForm && (
        <input 
          type="text" 
          placeholder="Full Name" 
          className="p-4 my-2 w-full bg-gray-700 rounded-md focus:outline-none"
        />
      )}

      <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-gray-700 rounded-md" />
      <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-gray-700 rounded-md" />

      <button className="p-4 my-6 w-full bg-red-600 rounded-md font-bold">
        {isSignInForm ? "Sign In" : "Sign Up"}
        
      </button>
        <div className="flex justify-between text-sm text-gray-400">
          <div>
            <input type="checkbox" className="mr-1" />
            <label>Remember me</label>
          </div>
          <p className="hover:underline cursor-pointer">Need help?</p>
      </div>

      {/* --- The Toggle Line --- */}
      <p 
        className="py-4 cursor-pointer hover:underline text-gray-400" 
        onClick={toggleSignInForm}
      >
        {isSignInForm ? (
          <>New to Netflix? <span className="text-white font-bold">Sign Up Now.</span></>
        ) : (
          <>Already registered? <span className="text-white font-bold">Sign In Now.</span></>
        )}
      </p>
    </form>
    </div>
  );
};
export default Login