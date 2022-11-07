import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { IEntidad, IEntidadSliceState } from '../../interface/entidad'
import { ISectorSliceState } from '../../interface/sector'
import { dropdownInitValue } from '../../static'
import { entidadService } from '../Service/entidadService'


const initialState: IEntidadSliceState = {
  entidades: null,
  error: null,
  loading: false,
  entidadActivo: dropdownInitValue
}

export const entidadSlice = createSlice({
  name: 'entidad',
  initialState,
  reducers: {
    setActivo: (state, action) => {
      state.entidadActivo = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(startFetchEntidad.fulfilled),
        (state, { payload } : { payload: IEntidad[] }) => {
          state.loading = false
          state.error = null
          state.entidades = payload
        }
      )
      .addMatcher(
        isAnyOf(startFetchEntidad.rejected),
        (state: any, { payload }) => {
          state.loading = false
          state.error = payload
          state.entidades = []
        }
      )
      .addMatcher(isAnyOf(startFetchEntidad.pending), (state) => {
        state.loading = true
      })
  }
})

export const startFetchEntidad = createAsyncThunk(
  'get/FetchEntidad',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { sector } = getState() as { sector: ISectorSliceState }

      const entidades = await entidadService.buscar(sector.sectorActivo.value)
      return entidades.map(({ id, descr }) => ({value: id, label: descr}))
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1])
    }
  }
)

export const entidadActions = entidadSlice.actions
