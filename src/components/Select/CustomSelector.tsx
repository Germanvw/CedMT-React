import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'

interface Props {
  label?: string
  value: string
  options: { value: string | number, label: string}[]
  handleChange: (event: SelectChangeEvent) => void
}

export const CustomSelector = ({label, value, options, handleChange}: Props) => {
  return (
    <FormControl sx={{ minWidth: 300 }}>
    {label && <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>}
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
        >
          {
            options.map(({value, label}) => <MenuItem key={value}  sx={{ minWidth: 300 }} value={value}>{label}</MenuItem>)
          }
        </Select>
    </FormControl>
  )
}
