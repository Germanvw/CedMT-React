import { createSlice } from '@reduxjs/toolkit'
import { IAuthSliceState } from '../../interface/Slice'

const initialState: IAuthSliceState = {
  user: null,
  error: null,
  loading: false,
  refreshing: true
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  }
})


export const authActions = authSlice.actions
