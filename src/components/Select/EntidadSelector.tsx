import { FormControl, SelectChangeEvent } from '@mui/material'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux'
import { entidadActions, startFetchEntidad } from '../../redux/Slice/entidadSlice'
import { CustomSelector } from './CustomSelector'

export const EntidadSelector = () => {
  const { sectorActivo } = useAppSelector((state) => state.sector)
  const { entidades, entidadActivo } = useAppSelector((state) => state.entidad)
  
  const dispatch = useAppDispatch()

  const handleChange = ({ target }: SelectChangeEvent) => {
    const { value } = target

    if(value)
      dispatch(entidadActions.setActivo(value))
  };

  useEffect(() => {
    if(sectorActivo && sectorActivo.value !== '0')
     dispatch(startFetchEntidad())
  },[sectorActivo])

  useEffect(() => {
    if(entidades && entidades.length === 1)
     dispatch(entidadActions.setActivo(entidades[0]))
     
  },[entidades])

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <CustomSelector value={entidadActivo.value} label='Entidad' handleChange={handleChange} options={entidades ? entidades : []} />
    </FormControl>
  )
}
