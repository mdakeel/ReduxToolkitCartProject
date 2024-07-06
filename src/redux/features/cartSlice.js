import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartslice",
    initialState: {
        carts : [],
        totalPrice: 0
    },
    reducers:{
        // add to cart
        addToCart: (state, action) => {
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id )
            
            if(itemIndex >= 0){
                state.carts[itemIndex].qnty += 1;
            }else{
                state.carts.push({ ...action.payload, qnty: 1 });
                
            }
        },

        // remove from cart
        removeFromCart: (state, action) => {
            state.carts = state.carts.filter((index) => index.id !== action.payload)
        },

        // Clear Cart
        clearCart: (state, action) => {
            state.carts = []
        },

        // decrement

        decrement: (state, action) => {
            const itemIndexDec = state.carts.findIndex((item) => item.id === action.payload.id)

            if( state.carts[itemIndexDec].qnty >= 1 ){
                state.carts[itemIndexDec].qnty -= 1;
            }
        }
    }
})

export const {addToCart, removeFromCart, clearCart, decrement} = cartSlice.actions;

export default cartSlice.reducer;

