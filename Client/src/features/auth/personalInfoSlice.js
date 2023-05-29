import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    first_name: '',
    last_name: '',
    country: '',
    city: '',
    street_address: '',
    phone: '',
};

const personalInfoSlice = createSlice({
    name: 'personal',
    initialState,
    reducers: {
        editFirstName: (state, action) => {
            state.first_name = action.payload
        },
        editLastName: (state, action) => {
            state.last_name = action.payload
        },
        editCountry: (state, action) => {
            state.country = action.payload
        },
        editCity: (state, action) => {
            state.city = action.payload
        },
        editStreetAddress: (state, action) => {
            state.street_address = action.payload
        },
        editPhone: (state, action) => {
            state.phone = action.payload
        },
    }
});
export const { editCity, editCountry, editFirstName, editLastName, editPhone, editStreetAddress } = personalInfoSlice.actions
export default personalInfoSlice.reducer