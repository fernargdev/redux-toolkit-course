import { createSlice } from '@reduxjs/toolkit'

const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    fetchUser: (state, action) => {
      return action.payload
    },
  },
})

export const { fetchUser } = usersSlice.actions

const usersReducer = usersSlice.reducer

export default usersReducer
