import { configureStore  } from "@reduxjs/toolkit";
import castlesReducer from './features/castles/castlesSlice'
import reviewsReducer from './features/reviews/reviewsSlice'
import userReducer from './components/Authentication/userSlice'
// import Reducers

const store = configureStore({
    reducer: {
        castles: castlesReducer,
        reviews: reviewsReducer,
        user: userReducer
    }
})

export default store;