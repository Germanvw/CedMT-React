import { fetchToken } from '../../hook/useFetch'
import { IMatcheo, IMatcheoResponse } from '../../interface/match'

const buscar = async (sectorId: string, entidadId: string) : Promise<IMatcheo> => {
  const req = await fetchToken(`Execute?sectorId${sectorId}&entidadId=${entidadId}`, undefined, 'GET')
  
  const { data, errors }: IMatcheoResponse = await req.json()

  if(errors) throw new Error(errors)
  else return data
}

export const matchService = {
  buscar,
}
