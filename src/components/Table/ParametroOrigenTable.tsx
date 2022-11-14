import { Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper, Typography } from '@mui/material'
import { IParamMatcheo, IParamOrigenes } from '../../interface/param'
import { theme } from '../../styles/theme'
import { CustomCheckbox } from '../Input/CustomCheckbox'

interface Props {
  params: IParamMatcheo
  origenes: IParamOrigenes
  disabled: boolean
  handleChange: ({ target }: { target: HTMLInputElement }) => void
}

const headRows = ['Duplicados','No Matcheados', 'Origen']

export const ParametroOrigenTable = ({ params, origenes, disabled,  handleChange }: Props) => {
  const { identificaDuplicadosOrigen1, identificaDuplicadosOrigen2, identificaNoMatchOrigen1, identificaNoMatchOrigen2 } = params
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {headRows.map((i) => <TableCell sx={{ p: 0, color: theme.colors.darkLabel, fontWeight: '700' }} align='center'>{i}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <CustomCheckbox checked={identificaDuplicadosOrigen1} disabled={disabled} onChange={handleChange} name='identificaDuplicadosOrigen1' size='small' />
          </TableCell>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <CustomCheckbox checked={identificaNoMatchOrigen1} disabled={disabled} onChange={handleChange} name='identificaNoMatchOrigen1' size='small' />
          </TableCell>
          <TableCell sx={{ p: 0, color: theme.colors.lightLabel }} align='center'>
            <Typography>{origenes.origen1}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <CustomCheckbox checked={identificaDuplicadosOrigen2} disabled={disabled} onChange={handleChange} name='identificaDuplicadosOrigen2' size='small' />
          </TableCell>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <CustomCheckbox checked={identificaNoMatchOrigen2} disabled={disabled} onChange={handleChange} name='identificaNoMatchOrigen2' size='small' />
          </TableCell>
          <TableCell sx={{ p: 0, color: theme.colors.lightLabel }} align='center'>
            <Typography sx={{ fontWeight: 400 }}>{origenes.origen2}</Typography>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
