import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: false
}

export const openSlice = createSlice({
    name: 'open',
    initialState,
    reducers: {
        isOpen: (state) => {
            state.value = !state.value
        }
    }
});
export const { isOpen} = openSlice.actions
export default openSlice.reducer