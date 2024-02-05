import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UsersState {
  organization?: string
  currentPage?: string
  _inited?: boolean
}

const initialState: UsersState = {
  organization: 'Моя организация',
  currentPage: '1',
  _inited: false
}

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setUserCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
    initState: (state, action: PayloadAction<URLSearchParams | undefined>) => {
      const page = action.payload?.get('page')

      state.currentPage = page ?? '1'
      state._inited = true
    }
  }
})

export const { reducer: organizationReducer, actions: organizationActions } = organizationSlice
