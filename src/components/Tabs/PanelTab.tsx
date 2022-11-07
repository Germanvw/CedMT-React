import { parseToTable } from '../../helper/parseTable'
import { CustomTable } from '../Table/CustomTable'

interface Props {
  value: any,
  separator: string
}

export const PanelTab = ({value, separator}: Props) =>  {
  const { header, rows } = parseToTable(value, separator)

  return (
    <CustomTable rows={rows} header={header} />
  );
}