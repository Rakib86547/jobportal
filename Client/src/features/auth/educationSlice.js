import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    educations: {
        degree_name: '',
        start_date: '',
        end_date: '',
        institute_name: '',
        description: '',
    },
    editEducation: {
        edit_degree_name: '',
        edit_start_date: '',
        edit_end_date: '',
        edit_institute_name: '',
        edit_description: '',
    }
};

export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {
        degreeName: (state, action) => {
            state.educations.degree_name = action.payload
        },
        startDate: (state, action) => {
            state.educations.start_date = action.payload
        },
        endDate: (state, action) => {
            state.educations.end_date = action.payload
        },
        instituteName: (state, action) => {
            state.educations.institute_name = action.payload
        },
        description: (state, action) => {
            state.educations.description = action.payload
        },
        // clearEducation: (state) => {
        //     state.educations = ''
        // },

        editDegreeName: (state, action) => {
            state.editEducation.edit_degree_name = action.payload
        },
        editStartDate: (state, action) => {
            state.editEducation.edit_start_date = action.payload
        },
        editEndDate: (state, action) => {
            state.editEducation.edit_end_date = action.payload
        },
        editInstitute: (state, action) => {
            state.editEducation.edit_institute_name = action.payload
        },
        editDescription: (state, action) => {
            state.editEducation.edit_description = action.payload
        },
    }
});

export const {
    degreeName,
    description,
    endDate,
    instituteName,
    startDate,
    editDegreeName,
    editDescription,
    editEndDate,
    editInstitute,
    editStartDate
} = educationSlice.actions
export default educationSlice.reducer