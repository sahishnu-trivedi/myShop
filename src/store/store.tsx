import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/CartProductSlice'

export default configureStore({
    reducer: {
        allCart: cartReducer,
    }
})