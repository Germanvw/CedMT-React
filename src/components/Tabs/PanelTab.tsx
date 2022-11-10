import { Box } from '@mui/material'
import { parseToTable } from '../../helper/parseTable'
import { CustomTable } from '../Table/CustomTable'

interface Props {
  value: any,
  separator: string
}

export const PanelTab = ({ value, separator }: Props) =>  {
  const { header, rows, tiposVariable } = parseToTable(value, separator)

  return (
    <Box sx={{pb:5}}>
      <CustomTable rows={rows} header={header} tiposVariable={tiposVariable}/>
    </Box>
  );
}