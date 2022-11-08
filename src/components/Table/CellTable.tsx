import { TableCell, TableRow } from '@mui/material'

export const CellTable = ({row}:{row: string[]}) => {
  return (
    <TableRow
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      {row.map((i, index) => <TableCell component="th" scope="row" key={i+index}>
              {i}
      </TableCell>)}
    </TableRow>
  )
}
