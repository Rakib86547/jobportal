import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import authSlice from "../features/auth/authSlice";
import openSlice from "../features/auth/openSlice";
import profileSlice from "../features/auth/profileSlice";
import personalInfoSlice from "../features/auth/personalInfoSlice";
import educationSlice from "../features/auth/educationSlice";
import workSlice from "../features/auth/workSlice";
import  companyProfileSlice  from "../features/auth/companyProfileSlice";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
        open: openSlice,
        profile: profileSlice,
        personal: personalInfoSlice,
        education: educationSlice,
        work: workSlice,
        company: companyProfileSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
export default store;