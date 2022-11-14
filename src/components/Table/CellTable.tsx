import { TableCell, TableRow } from '@mui/material'
import { theme } from '../../styles/theme';

interface Props {
  tiposVariable: string[]
  row: string[]
}

const numero = new Intl.NumberFormat( "es-ES" );

const formatear = (n: number, type: 'M' | 'N') => {
  return type === 'M' ? `$ ${numero.format(n)}` : numero.format(n)
}

export const CellTable = ({ row, tiposVariable } : Props) => {

  const parseToTipoVariable = (i: string, index: number): string | number => {
    const tipoVariable = tiposVariable[index]

    return tipoVariable === 'Int32' ? formatear(parseInt(i),'N') : tipoVariable === 'Decimal' ? formatear(parseFloat(parseFloat(i).toFixed(2)),'M') : i
   }

  return (
    <TableRow>
      {row.map((i, index) => (
      <TableCell sx={{ py: 0.5, px: 1, borderRight: index === row.length - 1 ? 0 : 1, borderColor: theme.colors.gray, color: theme.colors.darkLabel, fontWeight: '500', width: '1px', whiteSpace: 'nowrap' }} align='center' key={i+index}>
        {parseToTipoVariable(i, index)}
      </TableCell>))}
    </TableRow>
  )
}
