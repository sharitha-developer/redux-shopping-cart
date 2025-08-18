import { createSlice } from "@reduxjs/toolkit";


const initialState = { items: [], totalQuantity: 0, changed: false }

const addToCartSlice = createSlice({
    name: 'Adding to the cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addItem(state, action) {
            const newProduct = action.payload;
            const existingItem = state.items.find(item => item.id === newProduct.id);
            state.changed = true;
            if (existingItem) {
                existingItem.quantity++;
                existingItem.total = existingItem.quantity * existingItem.price;
            } else {
                state.items.push({
                    id: newProduct.id,
                    title: newProduct.title,
                    price: newProduct.price,
                    total: newProduct.price * 1,
                    quantity: 1
                })

            }
            state.totalQuantity++;
        },
        removeItem(state, action) {
            const proId = action.payload;
            const existingItem = state.items.find(item => item.id === proId.id);
            if (existingItem.quantity <= 1) {
                state.items = state.items.filter(item => item.id !== existingItem.id);
                state.totalQuantity++;

            } else {
                existingItem.quantity--;
                existingItem.total = existingItem.quantity * existingItem.price;
                state.totalQuantity--;

            }
        }
    }
});



export const addToCartAction = addToCartSlice.actions;

export default addToCartSlice.reducer;