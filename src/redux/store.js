import { configureStore } from '@reduxjs/toolkit'
import cart from './slices/cartSlice'
import filter from './slices/filterSlice'
import product from './slices/products'


export default configureStore({
  reducer: {
    product,filter,cart
  }
})