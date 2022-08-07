import { configureStore } from "@reduxjs/toolkit";
import authReducer  from './authSlice'
import errandReducer from './errandSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        errand: errandReducer
    }
})

export default store;