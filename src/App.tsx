import { Provider } from 'react-redux'
import { Homepage } from './screen/Homepage'
import { store } from './redux'
import { ThemeProvider } from '@mui/system'
import { customTheme } from './styles/theme'

export const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Provider store={store}>
        <Homepage />
      </Provider>
    </ThemeProvider>
  )
}
