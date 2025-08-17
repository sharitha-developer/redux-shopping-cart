import { createSlice } from "@reduxjs/toolkit";
import { toggleActions } from "./cart-toggle";

const initialState = { items: [], totalQuantity: 0 }

const addToCartSlice = createSlice({
    name: 'Adding to the cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newProduct = action.payload;
            const existingItem = state.items.find(item => item.id === newProduct.id);
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
            }
        }
    }
});

const sendCartData = (cartData) => {
    return (dispatch) => { 
       dispatch(toggleActions.showNotification({
        status: 'pending',
        title: 'sending',
        message: 'Sending cart data!',
      }))
     }
}

export const addToCartAction = addToCartSlice.actions;

export default addToCartSlice.reducer;