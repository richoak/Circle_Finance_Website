import { createSlice } from '@reduxjs/toolkit'

const initialErrandState = { 
    details: [],
    errandBody:"",
    location:""
}
const errandSlice = createSlice({
    name: 'errand',
    initialState:initialErrandState,
    reducers: {
        add(state, action){
            state.details = action.payload
        },
        addErrand(state, action){
            state.errandBody = action.payload
        },
        addLocation(state, action){
            state.location = action.payload
        }
    }
});

export const errandActions = errandSlice.actions
export default errandSlice.reducer