import { configureStore  } from "@reduxjs/toolkit";
import castlesReducer from './features/castles/castlesSlice'
import reviewsReducer from './features/reviews/reviewsSlice'

// import Reducers

const store = configureStore({
    reducer: {
        castles: castlesReducer,
        reviews: reviewsReducer,
    }
})

export default store;