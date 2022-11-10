import { fetchToken } from '../../hook/useFetch'
import { IExecuteRequestBody, IMatcheo, IMatcheoResponse } from '../../interface/match'
import { IParamMatcheo } from '../../interface/param'

const buscar = async (sectorId: string, entidadId: string, params: IParamMatcheo) : Promise<IMatcheo> => {
  const body: IExecuteRequestBody = {
    ...params,
    sectorId,
    entidadId,
  }

  const req = await fetchToken(`Execute?sectorId=${sectorId}&entidadId=${entidadId}`, body, 'POST')

  const { data, errors }: IMatcheoResponse = await req.json()

  if(errors) throw new Error(errors[0].message as string)
  else return data
}

export const matchService = {
  buscar,
}
