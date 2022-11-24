import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useAppDispatch } from '../../hook/useRedux'
import { IParamMatcheo } from '../../interface/param'
import { paramActions } from '../../redux/Slice/paramSlice'
import { theme } from '../../styles/theme'
import { CustomCheckbox } from '../Input/CustomCheckbox'

interface Props {
  params: IParamMatcheo
  disabled: boolean
}


export const GrillaCheckboxsBusqueda = ({ params, disabled }: Props) => {
  const { calculaTotales, identificaMatcheados, identificaDuplicadosOrigen1, identificaNoMatchOrigen1 } = params

  const [duplicados, setDuplicados] = useState(identificaDuplicadosOrigen1)
  const [noMatcheados, setNotMatcheados] = useState(identificaNoMatchOrigen1)

  const dispatch = useAppDispatch()

  const handleChange = ({ target }: {target: HTMLInputElement}) => {
    const { name, checked } = target

    if(target.name === 'noMatcheados'){
      setNotMatcheados(checked)
      dispatch(paramActions.setParams({ ...params, identificaNoMatchOrigen1: checked, identificaNoMatchOrigen2: checked }))
    }else if(target.name === 'duplicados'){
      setDuplicados(checked)
      dispatch(paramActions.setParams({ ...params, identificaDuplicadosOrigen1: checked, identificaDuplicadosOrigen2: checked }))
    }
    else
      dispatch(paramActions.setParams({ ...params, [name]: checked }))
  }
  return (
    <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', whiteSpace: 'nowrap'}}>
      <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',  whiteSpace: 'nowrap'}}>
        <CustomCheckbox checked={calculaTotales} disabled={disabled} onChange={handleChange} name='calculaTotales' size='small' />
        <Typography sx={{ p: 0, color: theme.colors.lightLabel, fontWeight: 400 }}>Totales</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',  whiteSpace: 'nowrap'}}>
        <CustomCheckbox checked={noMatcheados} disabled={disabled} onChange={handleChange} name='noMatcheados' size='small' />
        <Typography sx={{ p: 0, color: theme.colors.lightLabel, fontWeight: 400 }}>No Matcheados</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', whiteSpace: 'nowrap'}}>
          <CustomCheckbox checked={duplicados} disabled={disabled} onChange={handleChange} name='duplicados' size='small' />
          <Typography sx={{ p: 0, color: theme.colors.lightLabel, fontWeight: 400 }}>Duplicados</Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between',  whiteSpace: 'nowrap'}}>
        <CustomCheckbox checked={identificaMatcheados} disabled={disabled} onChange={handleChange} name='identificaMatcheados' size='small' />
        <Typography sx={{ p: 0, color: theme.colors.lightLabel, fontWeight: 400 }}>Matcheados</Typography>
      </Box>
    </Box>
  )
}
