import { IMatcheo, IMatcheoDto } from '../interface/match';

export const parseMatchToDto = (matcheo: IMatcheo) : IMatcheoDto => {
  const { delimitador, totales, matcheados, descrOrigen1, descrOrigen2, duplicadosOrigen1, duplicadosOrigen2, noMatcheadosOrigen1, noMatcheadosOrigen2} = matcheo
  return{
    delimitador,
    descrOrigen1,
    descrOrigen2,
    data: {
      totales,
      noMatcheadosOrigen1,
      noMatcheadosOrigen2,
      duplicadosOrigen1,
      duplicadosOrigen2,
      matcheados,
    }
  }
}