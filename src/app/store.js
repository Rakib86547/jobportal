import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import validateSlice from "../features/validate/validateSlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        validate: validateSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
export default store;