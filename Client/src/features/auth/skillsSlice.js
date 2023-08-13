import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: '',
    skills: ''
}

export const skillsSlice = createSlice({
    name: 'skill',
    initialState,
    reducers: {
        skillsAdd: (state, action) => {
            state.skills = action.payload
        },
        addEmail: (state, action) => {
            state.email = action.payload
        },
        // removeSkill: (state, action) => {
        //     state.skills = []
        // }
    }
});

export const { skillsAdd, removeSkill, addEmail } = skillsSlice.actions
export default skillsSlice.reducer