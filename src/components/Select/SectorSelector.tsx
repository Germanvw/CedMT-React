import { FormControl, SelectChangeEvent } from '@mui/material'
import { CustomSelector } from './CustomSelector'
import { useAppDispatch, useAppSelector } from '../../hook/useRedux';
import { sectorActions, startFetchSector } from '../../redux/Slice/sectorSlice';
import { useEffect } from 'react'

export const SectorSelector = () => {
  const { sectores, sectorActivo } = useAppSelector((state) => state.sector)
  
  const dispatch = useAppDispatch()

  const handleChange = ({ target }: SelectChangeEvent) => {
    const { value } = target

    if(value)
      dispatch(sectorActions.setActivo(value))
  };
  
  useEffect(() => {
    if(sectores && sectores.length === 1) 
     dispatch(sectorActions.setActivo(sectores[0]))
    
  },[sectores])
  
  useEffect(() => {
    if(!sectores) dispatch(startFetchSector())
  },[])

  return (
    <FormControl sx={{ m: 1, minWidth: 80 }}>
      <CustomSelector value={sectorActivo.value} label='Sector' handleChange={handleChange} options={sectores ? sectores : []} />
    </FormControl>
  )
}
