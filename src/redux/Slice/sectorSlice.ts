import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { ISectorSliceState } from '../../interface/sector'
import { dropdownInitValue } from '../../static'
import { sectorService } from '../Service/sectorService'


const initialState: ISectorSliceState = {
  sectores: null,
  error: null,
  loading: false,
  sectorActivo: dropdownInitValue
}

export const sectorSlice = createSlice({
  name: 'sector',
  initialState,
  reducers: {
    setActivo: (state, action) => {
      state.sectorActivo = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(startFetchSector.fulfilled),
        (state, { payload } : {payload: any}) => {
          state.loading = false
          state.error = null
          state.sectores = payload
        }
      )
      .addMatcher(
        isAnyOf(startFetchSector.rejected),
        (state: any, { payload }) => {
          state.loading = false
          state.error = payload
          state.sectores = []
        }
      )
      .addMatcher(isAnyOf(startFetchSector.pending), (state) => {
        state.loading = true
      })
  }
})

export const startFetchSector = createAsyncThunk(
  'get/FetchSector',
  async (_, { rejectWithValue }) => {
    try {
      const sectores = await sectorService.buscar()
      return sectores.map(({ id, descr }) => ({value: id, label: descr}))
    } catch (err: any) {
      rejectWithValue(err.toString().split(': ')[1])
    }
  }
)

export const sectorActions = sectorSlice.actions
