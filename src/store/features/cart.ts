import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import {  CartState, Product } from "src/Types";

const initialState:CartState = {
    products:[]
}

export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        //handles the add to cart action
        addToCart(state:CartState,action:PayloadAction<Product>){
            const productExist = state?.products?.findIndex((product)=>product.id===action.payload.id)
            if(productExist >=0){
                state.products[productExist].quantity+=1;
            }else{
                
                state.products.push(action.payload);
            }
        },
        //handle remove from cart action
        removeFromCart(state:CartState,action:PayloadAction<string>){
            const indexToDelete = state.products.findIndex((product)=>product.id===action.payload);
            if( indexToDelete>=0 && state.products[indexToDelete]?.quantity>=0){
                state.products[indexToDelete].quantity-=1;
            }
            if(indexToDelete>=0 && state.products[indexToDelete]?.quantity==1){
                state.products.splice(indexToDelete,1);
            }
            
        },
        //handle reseting the cart
        resetCart(state:CartState){
            state = initialState;
        }
    }
})

export default cartSlice.reducer;
export const { addToCart, removeFromCart,resetCart } = cartSlice.actions;