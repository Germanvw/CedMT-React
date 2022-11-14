import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { startFetchParam } from '../../redux/Slice/paramSlice'
import { theme } from '../../styles/theme'
import { GrillaFormularioBusqueda } from './GrillaFormularioBusqueda'

export const GrillaParametro = () => {
  const { sectorActivo } = useAppSelector((state) => state.sector)
  const { entidadActivo } = useAppSelector((state) => state.entidad)
  const { params, origenes, error } = useAppSelector((state) => state.param)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if(sectorActivo.value !== '0' && entidadActivo.value !== '0') dispatch(startFetchParam())
  },[sectorActivo.value, entidadActivo.value])

  return (
    <Box>
      {params && origenes && !error
        && <GrillaFormularioBusqueda params={params} origenes={origenes} />
      }
      {error 
        &&
          <Typography color={theme.colors.error}>{error}</Typography> 
      }
    </Box>
  )
}
