import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalJobs: 0
};

export const totalJobsSlice = createSlice({
    name: 'totalJob',
    initialState,
    reducers: {
        setTotalJobs: (state, action) => {
            state.totalJobs = action.payload
        }
    }
});

export const { setTotalJobs } = totalJobsSlice.actions;
export default totalJobsSlice.reducer