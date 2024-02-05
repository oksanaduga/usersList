import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type TokenOrder } from './types'

export interface UsersState {
  organization?: string
  currentPage: string
  _inited?: boolean
  tokensOrder: TokenOrder
}

const initialState: UsersState = {
  organization: 'Моя организация',
  currentPage: '1',
  tokensOrder: 'tokens:asc',
  _inited: false
}

export const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setUserCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
    setTokenOrder: (state, action: PayloadAction<TokenOrder>) => {
      state.tokensOrder = action.payload
    },
    initState: (state, action: PayloadAction<URLSearchParams | undefined>) => {
      const page = action.payload?.get('page')
      const tokensOrder = action.payload?.get('orderBy') ?? 'tokens:asc'

      state.currentPage = page ?? '1'
      state.tokensOrder = tokensOrder as TokenOrder
      state._inited = true
    }
  }
})

export const { actions: organizationActions } = organizationSlice
export const { reducer: organizationReducer } = organizationSlice
