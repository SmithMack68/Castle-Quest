import { createSlice } from "@reduxjs/toolkit";

// export const  = createAsyncThunk("", () => {
//     return fetch('/me')
//     .then((resp) => resp.json())
//     .then((data) => data)
// })

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state) => {
            state.user = null
        }
    }
})


export const { login, logout } = userSlice.actions

// export const selectCurrentUser = (state) => state.user.user

export default userSlice.reducer