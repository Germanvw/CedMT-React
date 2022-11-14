import { IMatcheo, IMatcheoDto } from '../interface/match';

export const parseMatchToDto = (matcheo: IMatcheo) : IMatcheoDto => {
  const { delimitador, totales, matcheados, origen1, origen2, duplicadosOrigen1, duplicadosOrigen2, noMatcheadosOrigen1, noMatcheadosOrigen2} = matcheo
  return{
    delimitador,
    origen1,
    origen2,
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