import { IMethodResponse, IDropdownResponse } from '.';
import { IErrorResponse } from './index';

export interface IEntidadSliceState {
  entidades: null | IEntidad[]
  error: null | string
  loading: boolean
  entidadActivo: IEntidad
}

export interface IEntidadResponse {
  errors: IErrorResponse[] | null
  data: IDropdownResponse[]
  meta: IMethodResponse
}

export interface IEntidad {
  value: string
  label: string
}