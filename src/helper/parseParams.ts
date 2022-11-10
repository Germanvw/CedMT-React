import { IParamMatcheoDto } from '../interface/param'

export const parseParamsToDto = ( data : any) : IParamMatcheoDto => {
  const { calculaTotales, identificaDuplicadosOrigen1, identificaDuplicadosOrigen2, identificaNoMatchOrigen1, identificaNoMatchOrigen2, identificaMatcheados } = data
  return{
    params: {
      calculaTotales,
      identificaDuplicadosOrigen1,
      identificaDuplicadosOrigen2,
      identificaNoMatchOrigen1,
      identificaNoMatchOrigen2,
      identificaMatcheados,
    },
    origenes: {
      origen1: data.origen1.descr,
      origen2: data.origen2.descr
    }
  }
}