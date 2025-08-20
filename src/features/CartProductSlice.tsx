import Product from "@/components/product/Product";
import { createSlice } from "@reduxjs/toolkit";

export const cartProductSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        totalQuantity: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, action) => {
            const cartProducts = state.cart.find((cartProduct) => (cartProduct.slug.current === action.payload.slug.current));
            if(cartProducts){
                alert("Product already in cart");
            }
            else{
                state.cart.push(action.payload)
            }
        },
        removeFromCart: (state, action) => {
            const cartProducts = state.cart.find((cartProduct) => (cartProduct.slug.current === action.payload.slug.current));
            if(cartProducts){
                state.cart = state.cart.filter((cartProduct) => (cartProduct.slug.current !== action.payload.slug.current));
            }
        },
        incrementQuantity: (state, action) => {
            const { product, quantity } = action.payload;
            console.log('incrementQuantity action.payload : ', action.payload);
            const cartProductQty = state.cart.find((qty) => product === qty.slug.current);
            if(cartProductQty){
                cartProductQty.quantity = quantity;
            }
        },
        calculateTotalQty: (state) => {
            const cartTotalQuantity =  state.cart.map((cartTotalQty) => cartTotalQty.quantity).reduce((acc, curr) => acc + curr, 0)
            state.totalQuantity = cartTotalQuantity;
            console.log('state totalQuantity : ', state.totalQuantity);
        }
    }
})

export const { addToCart, removeFromCart, incrementQuantity, calculateTotalQty } = cartProductSlice.actions;
export default cartProductSlice.reducer;