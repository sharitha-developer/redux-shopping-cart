import { createSlice } from "@reduxjs/toolkit";


const initialState = { cartToggle: false, notification: null }

const toggleSlice = createSlice({
    name: 'Toggel cart',
    initialState,
    reducers: {
        toggle(state) {
            state.cartToggle = !state.cartToggle;
        },
        showNotification(state, action) {
            state.notification = { status: action.payload.status, title: action.payload.title, message: action.payload.message, }
        }
    }
});



export const toggleActions = toggleSlice.actions;

export default toggleSlice.reducer;