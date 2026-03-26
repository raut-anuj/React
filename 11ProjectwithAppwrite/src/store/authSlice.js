import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login:(state, action) => {
            state.status = true;
            state.userData = action.payload.userData
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

//post bhi auth kh tarah bane gh name: "post"
// user kh sara post leh nh kh liye 