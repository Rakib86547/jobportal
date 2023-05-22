import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: '',
    name: '',
    job_title: '',
    website: '',
    language: '',
    age: '',
    image: '',
    description: '',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        editName: (state, action) => {
            state.name = action.payload
        },
        editJobTitle: (state, action) => {
            state.job_title = action.payload
        },
        editPhone: (state, action) => {
            state.phone = action.payload
        },
        editLanguage: (state, action) => {
            state.language = action.payload
        },
        editWebsite: (state, action) => {
            state.website = action.payload
        },
        editAge: (state, action) => {
            state.age = action.payload
        },
        editImage: (state, action) => {
            state.image = action.payload
        },
        editDescription: (state, action) => {
            state.description = action.payload
        },
        userEmail: (state, action) => {
            state.email = action.payload
        },
    }
});

export const { editAge, userEmail, editDescription, editImage, editJobTitle, editLanguage, editName, editPhone, editWebsite } = profileSlice.actions

export default profileSlice.reducer;