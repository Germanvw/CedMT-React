import { createSlice } from '@reduxjs/toolkit'
import { IUiSliceState } from '../../interface/Slice'

const initialState: IUiSliceState = {
  modal: null,
  error: null,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setModal: (state, action) => {
      state.modal = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
})

export const uiActions = uiSlice.actions
