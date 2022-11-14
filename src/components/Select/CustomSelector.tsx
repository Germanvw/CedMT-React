import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { theme } from '../../styles/theme'

interface Props {
  label?: string
  value: string
  options: { value: string | number, label: string}[]
  handleChange: (event: SelectChangeEvent) => void
}



export const CustomSelector = ({label, value, options, handleChange}: Props) => {

  return (
    <FormControl sx={{ minWidth: 220 }} >
    {label && <InputLabel sx={{ color: theme.colors.primary, fontWeight: 700 }} id="demo-simple-select-autowidth-label">{label}</InputLabel>}
      <Select
        sx={{ p:0,
        '& .MuiSelect-select': {
          paddingLeft: '20px',
          paddingRight: '20px',
          paddingTop: '10px', 
          paddingBottom: '10px',
          color: theme.colors.primary,
        },  "&.MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.colors.lightPrimary
          },
          "&:hover fieldset": {
            borderColor:'#96bcf2', 
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.colors.primary
          }
        }}}
        id="demo-simple-select-autowidth"
        value={value}
        onChange={handleChange}
        autoWidth
        label={label}
        >
          {
            options.map(({value, label}) => <MenuItem key={value}  sx={{ minWidth: 220, py: 0.5, px: 1 }} value={value}>{label}</MenuItem>)
          }
        </Select>
    </FormControl>
  )
}
