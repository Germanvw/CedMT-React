import { Box } from '@mui/material'
import { parseToTable } from '../../helper/parseTable'
import { CustomTable } from '../Table/CustomTable'

interface Props {
  value: any,
  separator: string
  active: string
}

export const PanelTab = ({ value, separator, active }: Props) =>  {
  const { header, rows, tiposVariable } = parseToTable(value, separator)

  return (
    <Box sx={{pb:5}}>
      <CustomTable active={active} rows={rows} header={header} tiposVariable={tiposVariable}/>
    </Box>
  );
}