import { TableBody } from '@mui/material'
import { CellTable } from './CellTable'

export const BodyTable = ({rows}: {rows: string[][]}) => {
  return (
    <TableBody>
      {rows.map((row,index) => (
          <CellTable row={row} key={index+row.length} />
        ))}
    </TableBody>
  )
}
