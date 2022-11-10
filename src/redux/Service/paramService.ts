import { fetchToken } from '../../hook/useFetch'
import { IParamMatcheo, IParamResponse } from '../../interface/param'

const buscar = async (sectorId: string, entidadId: string) : Promise<IParamMatcheo> => {

  const req = await fetchToken(`GetParms?sectorId=${sectorId}&entidadId=${entidadId}`, undefined, 'GET')

  const { data, errors }: IParamResponse = await req.json()

  if(errors) throw new Error(errors[0].message as string)
  else return data.entidad
}

export const paramService = {
  buscar,
}
