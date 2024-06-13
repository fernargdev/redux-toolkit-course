import { configureStore } from '@reduxjs/toolkit'

// TODO:
let usersReducer = {}

const store = configureStore({
  reducer: {
    data: {
      users: usersReducer,
    },
  },
})

export default store
