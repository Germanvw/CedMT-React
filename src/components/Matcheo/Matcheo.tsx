import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { startFetchMatch } from '../../redux/Slice/matchSlice'
import { MatcheoTab } from '../Tabs/MatcheoTab'

export const Matcheo = () => {
  const { sectorActivo } = useAppSelector((state) => state.sector)
  const { entidadActivo } = useAppSelector((state) => state.entidad)
  const { error } = useAppSelector((state) => state.match)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if(sectorActivo.value !== '0' && entidadActivo.value !== '0') dispatch(startFetchMatch())
  },[sectorActivo, entidadActivo])

  return (
    <Box
      sx={{
        height: 800,
      }}
    >
      {!error 
        ?
          <MatcheoTab />
        :
          <Typography color='red'>{error}</Typography>
    }
    </Box>
  )
}
