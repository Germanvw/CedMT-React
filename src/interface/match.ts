import { IMethodResponse } from '.';

interface IMatcheoCommon {
  delimitador: string
}

export interface IMatcheoData {
  totales: string[]
  matcheados: string[]
  duplicadosOrigen1: string[]
  duplicadosOrigen2: string[]
  noMatcheadosOrigen1: string[]
  noMatcheadosOrigen2: string[]
}

interface IMatcheoDescripcion {
  descrOrigen1: string
  descrOrigen2: string
}

export interface IMatcheo extends IMatcheoCommon, IMatcheoData, IMatcheoDescripcion{
}


export interface IMatcheoDto extends IMatcheoCommon, IMatcheoDescripcion  {
  data: IMatcheoData
}

export interface IMatcheoResponse {
  errors: null | any
  data: IMatcheo
  meta: IMethodResponse
}

export interface IMatchSliceState {
  matcheo: IMatcheoDto | null
  error: string | null
  loading: boolean
}

// interface IMatcheoDtoItem {
//   descripcion: string
//   duplicados: string[]
//   noMatcheados: string[]
// }

// export interface IMatcheoDto extends IMatcheoCommon {
//   origen1: IMatcheoDtoItem
//   origen2: IMatcheoDtoItem
// }