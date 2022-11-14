import { Box } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { IParamMatcheo, IParamOrigenes } from '../../interface/param'
import { paramActions } from '../../redux/Slice/paramSlice'
import { GrillaParametroCalculo } from './GrillaParametroCalculo'
import { GrillaParametroOrigen } from './GrillaParametroOrigen'

interface Props {
  params: IParamMatcheo
  origenes: IParamOrigenes
}

export const GrillaFormularioBusqueda = ({ params, origenes }: Props) => {
  const { loading } = useAppSelector((state) => state.match)

  const dispatch = useAppDispatch()

  const handleChange = ({ target }: {target: HTMLInputElement}) => {
    const { name, checked } = target

    dispatch(paramActions.setParams({ ...params, [name]: checked }))
  }

  return (
    <Box sx={{ display: 'flex', flexDirection:{xs: 'column', md:'row'}, alignItems:'center', justifyContent:'center'}}
    
    >
      <GrillaParametroOrigen params={params} origenes={origenes} loading={loading} handleChange={handleChange} />
      <GrillaParametroCalculo params={params} loading={loading} handleChange={handleChange} />
    </Box>
  )
}
