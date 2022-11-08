import { Paper, Table, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material'
import { parseStringToSpaceUppercase } from '../../helper/parseString'
import { BodyTable } from './BodyTable'
import { usePagination } from '../../hook/usePagination'

interface Props {
  header: string[]
  tiposVariable: string[]
  rows: string[][]
}

export const CustomTable = ({rows, header, tiposVariable}: Props) => {

  const { page, pageSize, paginatedRows, handleChange, setPage } = usePagination(rows)

  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {header.map((i, index) =><TableCell align='center' key={index}>{parseStringToSpaceUppercase(i)}</TableCell> )}
            </TableRow>
          </TableHead>
          <BodyTable rows={paginatedRows} tiposVariable={tiposVariable} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={pageSize}
        page={page}
        onPageChange={(_,p) => setPage(p)}
        onRowsPerPageChange={({target}) => handleChange(target.value)}
      />
    </Paper>
  )
}
