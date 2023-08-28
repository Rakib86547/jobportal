import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    keywords: '',
    title: '',
    city: '',
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
        clearSearchValue: (state) => {
            state = {}
        }
    }
});

export const { searchCity, searchCountry, searchKeyword, searchTitle } = searchApi.actions;
export default searchApi.reducer