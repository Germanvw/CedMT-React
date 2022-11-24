import { Table, TableContainer, TableRow, TableBody, TableCell, Paper, Typography } from '@mui/material'
import { IParamMatcheo } from '../../interface/param'
import { theme } from '../../styles/theme'
import { GrillaCheckboxsBusqueda } from '../Parametros/GrillaCheckboxsBusqueda'

interface Props {
  params: IParamMatcheo
  disabled: boolean
}


export const ParametroCalculoTable = ({ params, disabled }: Props) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ width: 140 }} aria-label="customized table">
        <TableBody>
        <TableRow>
          <TableCell sx={{ px: 0.5, py: 0 }} align='center'>
            <Typography color={theme.colors.darkLabel} sx={{ fontWeight: 'bold' }}>Filtro de Resultados</Typography>
            <GrillaCheckboxsBusqueda params={params} disabled={disabled} />
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
