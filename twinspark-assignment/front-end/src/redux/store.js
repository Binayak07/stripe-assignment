import productReducer from './product/productReducer'
import { createStore } from 'redux'

const store = createStore(productReducer);
export default store;