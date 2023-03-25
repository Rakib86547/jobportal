import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowPassword: "",
    lowerValidated: false,
    upperValidated: false,
    numberValidated: false,
    specialValidated: false,
    lengthValidated: false,
}

const validateSlice = createSlice({
    name: "validate",
    initialState,
    reducers: {
        validateShowPassword: (state, action) => {
            // console.log('action---->', action.payload)
            state.isShowPassword = action.payload;
            state.lowerValidated = true;
            state.upperValidated = true;
            state.numberValidated = true;
            state.specialValidated = true;
            state.lengthValidated = true;
        }
    }
});

export const { validateShowPassword } = validateSlice.actions;
export default validateSlice.reducer;