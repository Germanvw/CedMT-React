import { Paper, Table, TableCell, TableContainer, TableHead, TablePagination } from '@mui/material'
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
console.log(header.length)
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
              {header.map((i, index) =>(
                <TableCell sx={{ py: 0.5, px: 1, borderRight: index === header.length -1 ? 0 : 1, borderColor: 'rgba(224, 224, 224, 1)' }}  style={{width: '1px', whiteSpace: 'nowrap'}} align='center' key={index}>{parseStringToSpaceUppercase(i)}</TableCell> 
              ))}
          </TableHead>
          <BodyTable rows={paginatedRows} tiposVariable={tiposVariable} />
        </Table>
      </TableContainer>
      <TablePagination
        labelRowsPerPage='Registros por pagina'
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
