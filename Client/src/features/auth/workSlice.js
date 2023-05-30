import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addWork: {
        job_title: '',
        company: '',
        start_date: '',
        end_date: '',
        description: ''
    },
    editWork: {
        job_title: '',
        company: '',
        start_date: '',
        end_date: '',
        description: ''
    }
};

const workSlice = createSlice({
    name: "work",
    initialState,
    reducers: {
        jobTitle: (state, action) => {
            state.addWork.job_title = action.payload
        },
        company: (state, action) => {
            state.addWork.company = action.payload
        },
        startDate: (state, action) => {
            state.addWork.start_date = action.payload
        },
        endDate: (state, action) => {
            state.addWork.end_date = action.payload
        },
        description: (state, action) => {
            state.addWork.description = action.payload
        },
        clearWork: (state, action) => {
            state.addWork = ''
        },

        // ----- edit area ------

        editJobTitle: (state, action) => {
            state.editWork.job_title = action.payload
        },
        editCompany: (state, action) => {
            state.editWork.company = action.payload
        },
        editStartDate: (state, action) => {
            state.editWork.start_date = action.payload
        },
        editEndDate: (state, action) => {
            state.editWork.end_date = action.payload
        },
        editDescription: (state, action) => {
            state.editWork.description = action.payload
        },
        clearEditWork: (state) => {
            state.editWork = ''
        }
    }
});

export const { 
    company, 
    description, 
    endDate, 
    jobTitle, 
    startDate, 
    clearWork,
    editCompany,
    clearEditWork,
    editDescription,
    editEndDate,
    editJobTitle,
    editStartDate
} = workSlice.actions;
export default workSlice.reducer