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
             state.entities.find((review) => review.id === action.payload.id)
        }, 
        deleteReview(state, action){
            state.filter(review => review !== action.payload)
            // const reviewId = action.payload;
            // state.filter((review) => review.id !== reviewId)
        }
    }
})

export const { reviewAdded, reviewUpdated, deleteReview } = reviewsSlice.actions

export default reviewsSlice.reducer;