import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const fetchCastles = createAsyncThunk("castles/fetchCastles", () => {
    return fetch('/castles')
    .then((resp) => resp.json())
    .then((data) => data)
})

//Reducer
const castlesSlice = createSlice({
    name: "castles",
    initialState: {
        entities: [], //array of castles
        status: "idle", //loading state
        // isLoading: true,
    },
    reducers: {
        castleAdded(state, action){
            state.entities.push(action.payload)
        },
        castleUpdated(state, action){
            const castle = state.entities.find((castle) => castle.id === action.payload.id)
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCastles.pending, (state) => {
            state.status = "loading"
        })
        .addCase(fetchCastles.fulfilled, (state, action) => {
            state.entities = action.payload
            state.status = "idle"
        })
    }
})

export const { castleAdded, castleUpdated } = castlesSlice.actions

export default castlesSlice.reducer;