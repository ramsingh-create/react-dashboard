import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import authReducer from "./authSlice";
import loggedInUserReducer from "./loggedInUserSlice";
import loaderSlice from "./loaderSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    loggedInUser: loggedInUserReducer,
    loader: loaderSlice,
  },
});     

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;