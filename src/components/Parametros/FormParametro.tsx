import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { IParamMatcheo, IParamOrigenes } from '../../interface/param'
import { startFetchMatch } from '../../redux/Slice/matchSlice'
import { paramActions } from '../../redux/Slice/paramSlice'
import { ParametroTable } from '../Table/ParametroTable'

interface Props {
  params: IParamMatcheo
  origenes: IParamOrigenes
}

export const FormParametro = ({ params, origenes }: Props) => {
  const { loading } = useAppSelector((state) => state.match)

  const dispatch = useAppDispatch()

  const handleChange = ({ target }: {target: HTMLInputElement}) => {
    const { name, checked } = target

    dispatch(paramActions.setParams({ ...params, [name]: checked }))
  }

  const handleBuscarMatcheo = () => {
    dispatch(startFetchMatch())
  }

  const opcionesSeleccionadas = Object.values(params).find((i) => i === true) === undefined

  return (
    <Box sx={{ display: 'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <FormControlLabel
        control={
          <Checkbox checked={params.calculaTotales } disabled={loading} onChange={handleChange} name="calculaTotales" size='small' />
        }
        label="Calcula Totales"
        labelPlacement="start"
      />
       <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
        <Typography sx={{ pr:3 }}>Identifica</Typography>
        <ParametroTable params={params} origenes={origenes} disabled={loading} handleChange={handleChange} />
        <Button variant="contained" sx={{ml: 4}} onClick={handleBuscarMatcheo} disabled={loading || opcionesSeleccionadas}>Buscar</Button>
      </Box>
      <FormControlLabel
        control={
          <Checkbox checked={params.identificaMatcheados } disabled={loading} onChange={handleChange} name="identificaMatcheados" size='small' />
        }
        label="Matcheados"
        labelPlacement="start"
      />
    </Box>
  )
}
