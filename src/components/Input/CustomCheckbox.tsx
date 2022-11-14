import { Checkbox } from '@mui/material';
import { theme } from '../../styles/theme'

interface Props {
  checked: boolean,
  disabled: boolean,
  name: string,
  size: "small" | "medium" | undefined,
  onChange: ({ target }: {
    target: HTMLInputElement;
}) => void
}

export const CustomCheckbox = ({disabled, onChange, size, name, checked}: Props) => {
  return (
    <Checkbox sx={{ py: 0.5, px: 1,
      '&.Mui-checked': {
      color: theme.colors.primary,
     }}} 
     checked={checked} disabled={disabled} onChange={onChange} name={name} size={size} />
  )
}
