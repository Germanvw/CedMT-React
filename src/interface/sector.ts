import { IDropdownResponse, IMethodResponse, IErrorResponse } from '.';

export interface ISectorSliceState {
  sectores: null | ISector[]
  error: null | string
  loading: boolean
  sectorActivo: ISector
}

export interface ISectorResponse {
  errors: IErrorResponse[] | null
  data: IDropdownResponse[]
  meta: IMethodResponse
}

export interface ISector {
  value: string
  label: string
}