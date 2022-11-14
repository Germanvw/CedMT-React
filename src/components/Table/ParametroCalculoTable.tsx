import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { IParamMatcheo } from '../../interface/param'
import { theme } from '../../styles/theme'
import { CustomCheckbox } from '../Input/CustomCheckbox'

interface Props {
  params: IParamMatcheo
  disabled: boolean
  handleChange: ({ target }: { target: HTMLInputElement }) => void
}

const headRows = ['Calcular']

export const ParametroCalculoTable = ({ params, disabled,  handleChange }: Props) => {
  const { calculaTotales, identificaMatcheados } = params
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 140 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headRows.map((i) => <TableCell sx={{ p: 0, color: theme.colors.darkLabel, fontWeight: '700' }} align='center'>{i}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <CustomCheckbox checked={calculaTotales} disabled={disabled} onChange={handleChange} name='calculaTotales' size='small' />
              <Typography sx={{ p: 0, color: theme.colors.lightLabel, fontWeight: 400 }}>Totales</Typography>
            </Box>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <Box sx={{ display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
              <CustomCheckbox checked={identificaMatcheados} disabled={disabled} onChange={handleChange} name='identificaMatcheados' size='small' />
              <Typography sx={{ p: 0, color: theme.colors.lightLabel, fontWeight: 400 }}>Matcheados</Typography>
            </Box>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
