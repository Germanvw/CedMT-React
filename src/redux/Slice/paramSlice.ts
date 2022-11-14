import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { parseParamsToDto } from '../../helper/parseParams'
import { IEntidadSliceState } from '../../interface/entidad'
import { IParamMatcheo, IParamSliceState } from '../../interface/param'
import { ISectorSliceState } from '../../interface/sector'
import { paramService } from '../Service/paramService'


const initialState: IParamSliceState = {
  params: null,
  origenes: null,
  error: null,
  loading: false,
}

export const paramSlice = createSlice({
  name: 'param',
  initialState,
  reducers: {
    setParams: (state, action) => {
      state.params = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(startFetchParam.fulfilled),
        (state, { payload } : { payload: IParamMatcheo }) => {
          const { params, origenes } = parseParamsToDto(payload)
          
          state.loading = false
          state.error = null
          state.params = params
          state.origenes = origenes
        }
      )
      .addMatcher(
        isAnyOf(startFetchParam.rejected),
        (state: any) => {
          state.loading = false
          state.error = 'Error al cargar los parametros de búsqueda'
          state.params = {}
        }
      )
      .addMatcher(isAnyOf(startFetchParam.pending), (state) => {
        state.loading = true
      }
    )
  }
})

export const startFetchParam = createAsyncThunk(
  'get/FetchParam',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { sector } = getState() as { sector: ISectorSliceState }
      const { entidad } = getState() as { entidad: IEntidadSliceState }

      return await paramService.buscar(sector.sectorActivo.value, entidad.entidadActivo.value)
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1])
    }
  }
)

export const paramActions = paramSlice.actions
