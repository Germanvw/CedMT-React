import { IMethodResponse, IErrorResponse } from '.';

interface IMatcheoCommon {
  delimitador: string
  origen1: IMatcheoOrigenDesc
  origen2: IMatcheoOrigenDesc
}

export interface IMatcheoData {
  totales: string[]
  matcheados: string[]
  duplicadosOrigen1: string[]
  duplicadosOrigen2: string[]
  noMatcheadosOrigen1: string[]
  noMatcheadosOrigen2: string[]
}

interface IMatcheoOrigenDesc {
  descr: string
  id: string
  ultimoArchivoProcesado: string
}

export interface IMatcheo extends IMatcheoCommon, IMatcheoData{
}


export interface IMatcheoDto extends IMatcheoCommon  {
  data: IMatcheoData
}

export interface IMatcheoResponse {
  errors: IErrorResponse[] | null
  data: IMatcheo
  meta: IMethodResponse
}

export interface IMatchSliceState {
  matcheo: IMatcheoDto | null
  error: string | null
  loading: boolean
}

export interface IExecuteRequestBody {
  sectorId: string
  entidadId: string
  calculaTotales: boolean
  identificaDuplicadosOrigen1: boolean
  identificaDuplicadosOrigen2: boolean
  identificaNoMatchOrigen1: boolean
  identificaNoMatchOrigen2: boolean
  identificaMatcheados: boolean
}