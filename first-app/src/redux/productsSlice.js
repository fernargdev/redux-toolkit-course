import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    createProduct: (state, action) => {},
    readProduct: (state, action) => {},
    updateProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
  },
})

export const { createProduct, readProduct, updateProduct, deleteProduct } =
  productSlice.actions

const productReducer = productSlice.reducer

export default productReducer
