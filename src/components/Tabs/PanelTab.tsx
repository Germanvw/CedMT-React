import { Box } from '@mui/material'
import { parseToTable } from '../../helper/parseTable'
import { CustomTable } from '../Table/CustomTable'

interface Props {
  value: any,
  separator: string
}

export const PanelTab = ({ value, separator }: Props) =>  {
  const { header, rows } = parseToTable(value, separator)

  return (
    <Box sx={{py:5}}>
      <CustomTable rows={rows} header={header} />
    </Box>
  );
}