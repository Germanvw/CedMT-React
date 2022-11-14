import { FormControlLabel } from '@mui/material'
import { CustomCheckbox } from './CustomCheckbox';

interface Props {
  checked: boolean,
  disabled: boolean,
  name: string,
  size: "small" | "medium" | undefined,
  label: string,
  labelPlacement: "bottom" | "top" | "start" | "end" | undefined,
  onChange: ({ target }: {
    target: HTMLInputElement;
}) => void
}


export const CustomFormCheckbox = ({checked, disabled, name, size, label, labelPlacement, onChange}: Props) => {
  return (
    <FormControlLabel
        sx={{ m: 0 }}
        control={
          <CustomCheckbox checked={checked} disabled={disabled} onChange={onChange} name={name} size={size} />
        }
        label={label}
        labelPlacement={labelPlacement}
      />
  )
}
