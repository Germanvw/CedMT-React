import { createAsyncThunk, createSlice, isAnyOf } from '@reduxjs/toolkit'
import { parseMatchToDto } from '../../helper/parseMatcheo'
import { IEntidadSliceState } from '../../interface/entidad'
import { IMatcheo, IMatchSliceState } from '../../interface/match'
import { IParamSliceState } from '../../interface/param';
import { ISectorSliceState } from '../../interface/sector'
import { matchService } from '../Service/matchService'


const initialState: IMatchSliceState = {
  matcheo: null,
  error: null,
  loading: false,
}

export const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(startFetchMatch.fulfilled),
        (state, { payload } : { payload: IMatcheo }) => {
          state.loading = false
          state.error = null
          state.matcheo = parseMatchToDto(payload)
        }
      )
      .addMatcher(
        isAnyOf(startFetchMatch.rejected),
        (state: any, { payload }) => {
          state.loading = false
          state.error = payload
          state.matcheo = {}
        }
      )
      .addMatcher(isAnyOf(startFetchMatch.pending), (state) => {
        state.loading = true
      }
    )
  }
})

export const startFetchMatch = createAsyncThunk(
  'get/FetchMatch',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { sector } = getState() as { sector: ISectorSliceState }
      const { entidad } = getState() as { entidad: IEntidadSliceState }
      const { param } = getState() as { param: IParamSliceState }

      if(param.params)
        return await matchService.buscar(sector.sectorActivo.value, entidad.entidadActivo.value, param.params)
      else throw new Error('Parametro no ingresado')
    } catch (err: any) {
      return rejectWithValue(err.toString().split(': ')[1])
    }
  }
)

export const matchActions = matchSlice.actions
