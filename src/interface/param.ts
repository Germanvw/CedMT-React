import { IMethodResponse } from '.';
import { IErrorResponse } from './index';

export interface IParamSliceState {
  params: IParamMatcheo | null
  error: string | null
  origenes: IParamOrigenes | null
  loading: boolean
}

export interface IParamResponse {
  errors: IErrorResponse[] | null
  data: any
  meta: IMethodResponse
}

export interface IParamMatcheo {
  calculaTotales: boolean
  identificaDuplicadosOrigen1: boolean
  identificaDuplicadosOrigen2: boolean
  identificaNoMatchOrigen1: boolean
  identificaNoMatchOrigen2: boolean
  identificaMatcheados: boolean
}

export interface IParamOrigenes {
  origen1: string
  origen2: string
}

export interface IParamMatcheoDto {
  params: IParamMatcheo
  origenes: IParamOrigenes
}