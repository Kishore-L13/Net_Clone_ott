// appStore.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utilis/useSlice"; // This will now correctly receive the reducer function

const appStore = configureStore({
  reducer: {
    user: userReducer, //  Now this is a valid reducer object!
  },
});

export default appStore;