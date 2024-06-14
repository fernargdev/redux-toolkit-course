import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
  },
  reducers: {
    createProduct: (state, action) => {
      state.data.push(action.payload)
    },
    readProduct: (state, action) => {
      state.data = action.payload
    },
    updateProduct: (state, action) => {
      const { id, name } = action.payload
      const product = state.data.find((product) => product.id === id)
      if (product) {
        product.name = name
      }
    },
    deleteProduct: (state, action) => {},
  },
})

export const { createProduct, readProduct, updateProduct, deleteProduct } =
  productSlice.actions

const productReducer = productSlice.reducer

export default productReducer
