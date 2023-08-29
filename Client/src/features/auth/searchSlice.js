import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    country: ''
};

export const searchApi = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchKeyword: (state, action) => {
            state.keywords = action.payload
        },
        searchTitle: (state, action) => {
            state.title = action.payload
        },
        searchCity: (state, action) => {
            state.city = action.payload
        },
        searchCountry: (state, action) => {
            state.country = action.payload
        },
        clearTitle: (state) => {
            state.title = ''
        },
        clearCountry: (state) => {
            state.country = ''
        },
    }
});

export const { searchCity, searchCountry, searchKeyword, searchTitle, clearCountry, clearTitle } = searchApi.actions;
export default searchApi.reducer