import { Checkbox, Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Paper, Typography } from '@mui/material'
import { IParamMatcheo, IParamOrigenes } from '../../interface/param'

interface Props {
  params: IParamMatcheo
  origenes: IParamOrigenes
  disabled: boolean
  handleChange: ({ target }: { target: HTMLInputElement }) => void
}

export const ParametroTable = ({ params, origenes, disabled,  handleChange }: Props) => {
  const { identificaDuplicadosOrigen1, identificaDuplicadosOrigen2, identificaNoMatchOrigen1, identificaNoMatchOrigen2 } = params
  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ p: 0 }} align='center' component="th" >Duplicados</TableCell>
            <TableCell sx={{ p: 0 }} align='center' component="th" >No Matcheados</TableCell>
            <TableCell sx={{ p: 0 }} align='center' component="th" >Origen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
          <TableCell sx={{ p: 0 }} align='center'>
            <Checkbox checked={identificaDuplicadosOrigen1} disabled={disabled} onChange={handleChange} name="identificaDuplicadosOrigen1" size='small' />
          </TableCell>
          <TableCell sx={{ p: 0 }} align='center'>
            <Checkbox checked={identificaNoMatchOrigen1} disabled={disabled} onChange={handleChange} name="identificaNoMatchOrigen1" size='small' />
          </TableCell>
          <TableCell sx={{ p: 0 }} align='center'>
            <Typography>{origenes.origen1}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell sx={{ p: 0 }} align='center'>
            <Checkbox checked={identificaDuplicadosOrigen2} disabled={disabled} onChange={handleChange} name="identificaDuplicadosOrigen2" size='small' />
          </TableCell>
          <TableCell sx={{ p: 0 }} align='center'>
            <Checkbox checked={identificaNoMatchOrigen2} disabled={disabled} onChange={handleChange} name="identificaNoMatchOrigen2" size='small' />
          </TableCell>
          <TableCell sx={{ p: 0 }} align='center'>
            <Typography>{origenes.origen2}</Typography>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
