import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isloginCompleted: false,
};

const propertiesSlice = createSlice({
    name: "properties",
    initialState,
    reducers: {
        setLoginCompletion: (state, action) => {
            state.isloginCompleted = true
        },
    },
});
export const {
    setLoginCompletion
} = propertiesSlice.actions;

const { reducer } = propertiesSlice;
export default reducer;
