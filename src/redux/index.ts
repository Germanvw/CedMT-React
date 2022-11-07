import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './Slice/authSlice'
import { entidadSlice } from './Slice/entidadSlice'
import { matchSlice } from './Slice/matchSlice'
import { sectorSlice } from './Slice/sectorSlice'
import { uiSlice } from './Slice/uiSlice';


export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    sector: sectorSlice.reducer,
    entidad: entidadSlice.reducer,
    match: matchSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
