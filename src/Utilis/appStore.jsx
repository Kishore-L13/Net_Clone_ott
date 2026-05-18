// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utilis/useSlice"; // This will now correctly receive the reducer function
import movieReducer from "./movieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer, //  Now this is a valid reducer object!
    movies: movieReducer,
  },
});

export default appStore;