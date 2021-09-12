import { ADD_TO_CART, DELETE_FROM_CART } from "./productType";

const initialState = {
    productsInCart: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        case DELETE_FROM_CART:
            return {
                ...state,
                productsInCart: state.productsInCart.filter(product=>product.id!=action.payload)
            }
        default:
            return state
    }
}

export default productReducer;