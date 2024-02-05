import { createSlice } from '@reduxjs/toolkit'
import { IRole, type IUser } from './types'

export interface UsersState {
  data?: IUser
  _inited?: boolean
}

const initialState: UsersState = {
  data: {
    role: IRole.ADMIN
  },
  _inited: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    initState: (state) => {
      state._inited = true
    }
  }
})

export const { reducer: userReducer } = userSlice
