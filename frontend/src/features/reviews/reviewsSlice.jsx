import { createSlice,  } from "@reduxjs/toolkit"

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: {
        entities: [],
    },
    reducers: {
        reviewAdded(state, action){
            state.entities.push(action.payload)
        },
        reviewUpdated(state, action){
            const review = state.entities.find((review) => review.id === action.payload.id)
        }
    }
})

export const { reviewAdded, reviewUpdated } = reviewsSlice.actions

export default reviewsSlice.reducer;