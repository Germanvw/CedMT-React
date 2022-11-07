import { fetchToken } from '../../hook/useFetch'
import { IDropdownResponse } from '../../interface'
import { IEntidadResponse } from '../../interface/entidad'

const buscar = async (sectorId: string) : Promise<IDropdownResponse[]> => {
  const req = await fetchToken(`GetEntitiesBySector?sectorId=${sectorId}`, undefined, 'GET')
  
  const { data, errors}: IEntidadResponse = await req.json()

  if(errors) throw new Error(errors)
  else return data
}

export const entidadService = {
  buscar,
}
