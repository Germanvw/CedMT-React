import { fetchToken } from '../../hook/useFetch'
import { IDropdownResponse } from '../../interface'
import { IEntidadResponse } from '../../interface/entidad'

const buscar = async (sectorId: string) : Promise<IDropdownResponse[]> => {
  const req = await fetchToken(`GetEntitiesBySector?sectorId=${sectorId}`, undefined, 'GET')
  
  const { data, errors}: IEntidadResponse = await req.json()

  if(errors) throw new Error(errors[0].message as string)
  else return data
}

export const entidadService = {
  buscar,
}
