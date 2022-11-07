import { IMethodResponse, IDropdownResponse } from '.';

export interface IEntidadSliceState {
  entidades: null | IEntidad[]
  error: null | string
  loading: boolean
  entidadActivo: IEntidad
}

export interface IEntidadResponse {
  errors: null | any
  data: IDropdownResponse[]
  meta: IMethodResponse
}

export interface IEntidad {
  value: string
  label: string
}