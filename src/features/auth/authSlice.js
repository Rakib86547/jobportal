import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
    user: '',
    role: '',
    isLoading: true,
    isError: false,
    status: '',
    error: ''
};

export const createUser = createAsyncThunk('auth/createUser', async ({ email, password }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    return data;
})

export const signInUser = createAsyncThunk('auth/signInUser', async ({ email, password }) => {
    const data = await signInWithEmailAndPassword(auth, email, password)
    return data;
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user = '';
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        },
        loading: (state) => {
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(createUser.fulfilled, (state, {payload}) => {
                state.user = payload;
                state.role = payload;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user = '';
                state.role = '';
                state.isLoading = false;
                state.isError = true;
                state.status = 'failed'
                state.error = action.error.message;

            })

            // ---------- for sign in --------
            .addCase(signInUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.role = action.payload;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.user = '';
                state.role = '';
                state.isLoading = false;
                state.isError = true;
                state.status = 'failed'
                state.error = action.error.message;

            })
    }
});
export const { logOut, setUser, loading } = authSlice.actions
export default authSlice.reducer;