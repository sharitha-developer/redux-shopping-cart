import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartToggle: false}

const toggleSlice = createSlice({
    name: 'Toggel cart',
    initialState,
    reducers:{
        toggle(state){        
           state.cartToggle = !state.cartToggle;
        }
    }
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice.reducer;