import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import openSlice from "../features/auth/openSlice";
import profileSlice from "../features/auth/profileSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        open: openSlice,
        profile: profileSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;