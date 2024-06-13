import { configureStore } from '@reduxjs/toolkit'

import usersReducer from './usersSlice'

const store = configureStore({
  reducer: {
    data: {
      users: usersReducer,
    },
  },
})

export default store
