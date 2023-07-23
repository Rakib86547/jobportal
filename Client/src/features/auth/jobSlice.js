import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    job_title: '',
    img: '',
    location: '',
    experience: '',
    salary: '',
    position: '',
    job_description: '',
    key_responsibilities: [],
    skill_experience: [],
    job_skills: [],
    application_deadline: '',
    job_type: '',
    applicants: [],
    queries: [],
    replies: []
};

export const jobSlice = createSlice({
    name: 'job',
    initialState,
    reducers: {
        jobTitle: (state, action) => {
            state.job_title = action.payload;
        },
        img: (state, action) => {
            state.img = action.payload;
        },
        location: (state, action) => {
            state.location = action.payload;
        },
        experience: (state, action) => {
            state.experience = action.payload;
        },
        salary: (state, action) => {
            state.salary = action.payload;
        },
        position: (state, action) => {
            state.position = action.payload;
        },
        jobDescription: (state, action) => {
            state.job_description = action.payload;
        },
        keyResponsibilities: (state, action) => {            
            state.key_responsibilities.push(action.payload)
        },
        skillExperience: (state, action) => {
            state.skill_experience.push(action.payload)
        },
        jobSkills: (state, action) => {
            state.job_skills.push(action.payload)
        },
        applicationDeadline: (state, action) => {
            state.application_deadline = action.payload;
        },
        jobType: (state, action) => {
            state.job_type = action.payload;
        },
    }
});

export const {
    jobTitle,
    experience,
    img,    
    location,
    position,
    salary,
    applicationDeadline,
    jobDescription,
    jobSkills,
    keyResponsibilities,
    skillExperience,
    jobType
} = jobSlice.actions
export default jobSlice.reducer