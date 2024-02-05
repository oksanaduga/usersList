import { configureStore } from '@reduxjs/toolkit'
import { rtkApi } from '@/shared/api/rtkApi'
import { organizationReducer } from '@/entities/Organization'
import { userReducer } from '@/entities/User/userSlice'

export const store = configureStore({
  reducer: {
    organization: organizationReducer,
    user: userReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rtkApi.middleware)
})

export type State = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
