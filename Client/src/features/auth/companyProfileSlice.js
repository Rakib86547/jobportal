import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    company_name: '',
    email: '',
    phone: '',
    company_website: '',
    est_since: '',
    team_size: '',
    country: '',
    city: '',
    complete_address: '',
    company_type: '',
    company_about: ''
};

export const companyProfileSlice = createSlice({
    name: 'company',
    initialState,
    reducers: {
        editCompanyName: (state, action) => {
            state.company_name = action.payload
        },
        email: (state, action) => {
            state.email = action.payload
        },
        phone: (state, action) => {
            state.phone = action.payload
        },
        companyWebsite: (state, action) => {
            state.company_website = action.payload
        },
        estSince: (state, action) => {
            state.est_since = action.payload
        },
        teamSize: (state, action) => {
            state.team_size = action.payload
        },
        country: (state, action) => {
            state.country = action.payload
        },
        city: (state, action) => {
            state.city = action.payload
        },
        completeAddress: (state, action) => {
            state.complete_address = action.payload
        },
        companyType: (state, action) => {
            state.company_type = action.payload
        },
        companyAbout:(state, action) => {
            state.company_about = action.payload
        }
    }
});

export const {
    city,
    companyType,
    companyWebsite,
    completeAddress,
    country,
    editCompanyName,
    email,
    estSince,
    phone,
    teamSize,
    companyAbout
} = companyProfileSlice.actions
export default companyProfileSlice.reducer