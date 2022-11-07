import { fetchToken } from '../../hook/useFetch'
import { IDropdownResponse } from '../../interface'
import { ISectorResponse } from '../../interface/sector'

const buscar = async () : Promise<IDropdownResponse[]> => {
  const req = await fetchToken('GetSectors', undefined, 'GET')
  
  const { data, errors}: ISectorResponse = await req.json()

  if(errors) throw new Error(errors)
  else return data
}

export const sectorService = {
  buscar,
}
