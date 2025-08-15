import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from './cart-toggle';
import addToCartSlice from './add-to-cart';


const store = configureStore({
    reducer: { cartToggle: toggleSlice, addToCart:addToCartSlice }
});

export default store;