import { Box, Button } from '@mui/material'
import { useAppDispatch } from '../../hook/useRedux'
import { IParamMatcheo } from '../../interface/param'
import { startFetchMatch } from '../../redux/Slice/matchSlice'
import { ParametroCalculoTable } from '../Table/ParametroCalculoTable'
import { theme } from '../../styles/theme';

interface Props {
  params: IParamMatcheo
  loading: boolean
  handleChange: ({ target }: { target: HTMLInputElement }) => void
}

export const GrillaParametroCalculo = ({ params, loading,  handleChange }: Props) => {
  
  const dispatch = useAppDispatch()

  const handleBuscarMatcheo = () => {
    dispatch(startFetchMatch())
  }

  const opcionesSeleccionadas = Object.values(params).find((i) => i === true) === undefined

  return (
    <Box 
      sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', px: 3, py: 1 }}
      >
      <ParametroCalculoTable params={params} disabled={loading} handleChange={handleChange} />
      <Button variant="contained" sx={{ ml: 3, px: 2, height: 40, backgroundColor: theme.colors.primary }} onClick={handleBuscarMatcheo} disabled={loading || opcionesSeleccionadas}>Buscar</Button>
    </Box>
  )
}
