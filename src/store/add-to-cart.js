import { createSlice } from "@reduxjs/toolkit";

const initialState = { items:[], totalQuantity:0 }

const addToCartSlice = createSlice({
    name: 'Adding to the cart',
    initialState,
    reducers:{
      addItem(state,action){       
          const newProduct = action.payload;
          const existingItem = state.items.find(item => item.id === newProduct.id);
          if(existingItem){
            existingItem.quantity++;
          } else{
            state.items.push({
                id: newProduct.id,
                title: newProduct.title,
                price:newProduct.price,     
                quantity:1
            })
          }
          state.totalQuantity++;              
      }
    }
});

export const addToCartAction = addToCartSlice.actions;

export default addToCartSlice.reducer;