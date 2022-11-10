import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { startFetchParam } from '../../redux/Slice/paramSlice'
import { FormParametro } from './FormParametro'

export const GrillaParametro = () => {
  const { sectorActivo } = useAppSelector((state) => state.sector)
  const { entidadActivo } = useAppSelector((state) => state.entidad)
  const { params, origenes } = useAppSelector((state) => state.param)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if(sectorActivo.value !== '0' && entidadActivo.value !== '0') dispatch(startFetchParam())
  },[sectorActivo.value, entidadActivo.value])

  return (
    <Box>
      {params && origenes 
        ? <FormParametro params={params} origenes={origenes} />
        : <Typography color='red'>Error al cargar los parametros de búsqueda</Typography> 
      }
    </Box>
  )
}
