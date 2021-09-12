import { ADD_TO_CART,DELETE_FROM_CART } from "./productType";

export const addToCart= (product) =>{
    return {
        type:ADD_TO_CART,
        payload:product
    }
} 

export const removeFromCart= (id) =>{
    return {
        type:DELETE_FROM_CART,
        payload:id
    }
} 