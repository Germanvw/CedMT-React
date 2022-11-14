import { createTheme } from '@mui/material'

export const theme = {
  colors: {
    blue: '#004ae0',
    lighth:'#ebf1ff',


    primary: '#266fd6',
    lightPrimary: '#D1DEF1',
    darkLabel: '#6A6E7C',
    lightLabel: '#838597',
    error: 'red',
    gray: '#cbcddb'
  }
}

export const customTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto', 'sans-serif'
    ].join(','),
  },
});