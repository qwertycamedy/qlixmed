import { configureStore } from '@reduxjs/toolkit'

import window from './slices/window/windowSlice'
import products from './slices/products/productsSlice'
import product from './slices/product/productSlice'
import reviews from './slices/reviews/reviewsSlice'
import user from './slices/user/userSlice'

export const store = configureStore({
  reducer: {
    window,
    products,
    product,
    reviews,
    user,
  },
})
