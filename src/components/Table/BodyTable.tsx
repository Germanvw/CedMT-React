import { TableBody } from '@mui/material'
import { CellTable } from './CellTable'

interface Props {
  tiposVariable: string[]
  rows: string[][]
}

export const BodyTable = ({rows, tiposVariable}: Props) => {
  return (
    <TableBody>
      {rows.map((row,index) => (
        <CellTable row={row} key={index+row.length} tiposVariable={tiposVariable} />
      ))}
    </TableBody>
  )
}
