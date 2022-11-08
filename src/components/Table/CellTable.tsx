import { TableCell, TableRow } from '@mui/material'

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
    <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {row.map((i, index) => (
      <TableCell sx={{ p:1 }} align='center' component="th" scope="row" key={i+index}>
        {parseToTipoVariable(i, index)}
      </TableCell>))}
    </TableRow>
  )
}
