import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './reducers/cartSlice'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
