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
            const cartProducts = state.cart.find((cartProduct) => (cartProduct.slug.current === action.payload.slug.current));
            if(cartProducts){
                console.log('inside If')
                cartProducts.quantity += 1;
            }
            else{
                state.cart.push(action.payload)
            }
        },
        // removeFromCart: (state, action) => {}
    }
})

export const {addToCart} = cartProductSlice.actions;
export default cartProductSlice.reducer;