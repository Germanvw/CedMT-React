import { Box } from '@mui/material'
import { useAppSelector } from '../../hook/useRedux'
import { IParamMatcheo, IParamOrigenes } from '../../interface/param'
import { GrillaParametroCalculo } from './GrillaParametroCalculo'

interface Props {
  params: IParamMatcheo
  origenes: IParamOrigenes
}

export const GrillaFormularioBusqueda = ({ params }: Props) => {
  const { loading } = useAppSelector((state) => state.match)

  return (
    <Box sx={{ display: 'flex', flexDirection:{xs: 'column', md:'row'}, alignItems:'center', justifyContent:'center'}}
    >
      <GrillaParametroCalculo params={params} loading={loading} />
    </Box>
  )
}
