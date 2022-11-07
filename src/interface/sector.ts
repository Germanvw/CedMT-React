import { IDropdownResponse, IMethodResponse } from '.'

export interface ISectorSliceState {
  sectores: null | ISector[]
  error: null | string
  loading: boolean
  sectorActivo: ISector
}

export interface ISectorResponse {
  errors: null | any
  data: IDropdownResponse[]
  meta: IMethodResponse
}

export interface ISector {
  value: string
  label: string
}