import { createSlice } from "@reduxjs/toolkit";

export const cartProductSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalQuantity: 0,
        quantity: 1,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const cartProducts = state.cart.find((cartProduct) => (cartProduct === action.payload));
            console.log('action.payload : ', action.payload);
            // state.quantity.push(action.payload)
            console.log('cartProducts from slice add : ', cartProducts);
            if(cartProducts){
                cartProducts.quantity += action.payload.quantity;
                console.log('cartProducts.quantity : ', cartProducts.quantity);
            }
            else{
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            const cartProducts = state.cart.find((cartProduct) => (cartProduct.slug === action.payload));
            console.log('cartProducts from slice : ', cartProducts);
            if(cartProducts){
                state.cart = state.cart.filter((cartProduct) => (cartProduct.slug !== action.payload));
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartProductSlice.actions;
export default cartProductSlice.reducer;