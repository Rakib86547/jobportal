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
        jobImg: (state, action) => {
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
            const key = action.payload;
            state.key_responsibilities.push(key)
        },
        skillExperience: (state, action) => {
            state.skill_experience.push(action.payload)
        },
        jobSkills: (state, action) => {
            const job = action.payload;
            state.job_skills.push(job)
        },
        applicationDeadline: (state, action) => {
            state.application_deadline = action.payload;
        },
        jobType: (state, action) => {
            state.job_type = action.payload;
        },
        removeKey: (state, action) => {
            state.key_responsibilities = []
        },
        removeSkill: (state, action) => {
            state.skill_experience = []
        },
        removeJob: (state) => {
            state.job_skills = []
        },
    }
});

export const {
    jobTitle,
    experience,
    location,
    position,
    salary,
    applicationDeadline,
    jobDescription,
    jobSkills,
    keyResponsibilities,
    skillExperience,
    jobType,
    removeJob,
    removeKey,
    removeSkill,
    removeImage,
    jobImg
} = jobSlice.actions
export default jobSlice.reducer