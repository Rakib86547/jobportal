import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { toast } from "react-hot-toast";

const initialState = {
    user: { email: "", role: "", name: "" },
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
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data;
})

export const googleSignIn = createAsyncThunk('auth/googleSignIn', async () => {
    const googleProvider = new GoogleAuthProvider();
    const data = await signInWithPopup(auth, googleProvider);
    if (data.providerId === "google.com") {
        const userInfo = {
            email: data.user.email,
            name: data.user.displayName,
            role: 'Candidate',
            image: data.user.photoURL,
        }
        const res = await fetch(`${process.env.REACT_APP_URL}/users/${userInfo.email}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        })
        const userData = await res.json()
        if (userData.result.acknowledged) {
            localStorage.setItem('userToken', userData.userToken)
        }
        return userInfo;
    }
})

export const passwordReset = createAsyncThunk('auth/passwordReset', async (email) => {
    try {
        const data = await sendPasswordResetEmail(auth, email)
        if (data) {
            console.log(data)
            toast.success('Please Check Your Email & Reset With New Password')
            return data;
        }
    }
    catch (error) {

        console.log(error.message)
    }
})


export const saveUsersInDB = createAsyncThunk('auth/saveUsersInDB', async (userInfo, thunkAPI) => {
    try {
        const res = await fetch(`${process.env.REACT_APP_URL}/users/${userInfo.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        const data = await res.json()
        if (data.result.acknowledged) {
            localStorage.setItem('userToken', data.userToken)
            return data
        } else {
            return thunkAPI.rejectWithValue(data)
        }
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.res.data)
    }
})

export const getUser = createAsyncThunk('auth/getUser', async (email) => {
    const res = await fetch(`${process.env.REACT_APP_URL}/users/${email}`)
    const data = await res.json()
    return data;

})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.user.email = '';
            state.user.name = '';
            state.user.role = '';
            state.user.image = '';
            state.user._id = '';
            // state.user = null;
            localStorage.removeItem('userToken')
        },
        setUser: (state, action) => {
            state.user.email = action.payload.email;
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
            .addCase(createUser.fulfilled, (state, { payload }) => {
                state.user.email = payload.user.email;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(createUser.rejected, (state, action) => {
                state.user.email = '';
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
                state.user.email = action.payload.user.email;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(signInUser.rejected, (state, action) => {
                state.user.email = '';
                state.isLoading = false;
                state.isError = true;
                state.status = 'failed'
                state.error = action.error.message;

            })

            // ------ sign in with google -------
            .addCase(googleSignIn.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(googleSignIn.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(googleSignIn.rejected, (state, action) => {
                state.user = '';
                state.isLoading = false;
                state.isError = true;
                state.status = 'failed'
                state.error = action.error.message;

            })

            // ------ save user from database -------
            .addCase(saveUsersInDB.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(saveUsersInDB.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(saveUsersInDB.rejected, (state, action) => {
                state.user = '';
                state.isLoading = false;
                state.isError = true;
                state.status = 'failed'
                state.error = action.error.message;

            })
            // ------ get user from database -------
            .addCase(getUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(getUser.fulfilled, (state, { payload }) => {
                state.user = payload;
                state.isLoading = false;
                state.isError = false;
                state.status = 'success'
            })
            .addCase(getUser.rejected, (state, action) => {
                state.user = '';
                state.isLoading = false;
                state.isError = true;
                state.status = 'failed'
                state.error = action.error.message;

            })
    }
});
export const { logOut, setUser, loading } = authSlice.actions
export default authSlice.reducer;