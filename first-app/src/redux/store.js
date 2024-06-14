import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './usersSlice'
import productReducer from './productsSlice'

const store = configureStore({
  reducer: {
    users: usersReducer,
    products: productReducer,
  },
})

export default store
