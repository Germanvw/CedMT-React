import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

interface Props {
  header: string[]
  rows: string[][]
}

const parseString = (str: string): string => {
  let string = ''
  const uppercase = str?.match(/([A-Z]?[^A-Z]*)/g)?.slice(0,-1)
  uppercase?.forEach((i, index) => index !== 0 ? string += ` ${i}` : string += i)

  return string
}

export const CustomTable = ({rows, header}: Props) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          { header.map((i, index) =><TableCell key={index}>{parseString(i)}</TableCell> )}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,index) => (
          <TableRow
            key={index+row.length}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            {row.map((i, index) => <TableCell component="th" scope="row" key={i+index}>
              {i}
            </TableCell>)}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
