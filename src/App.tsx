import { Provider } from 'react-redux'
import { Homepage } from './screen/Homepage'
import { store } from './redux'

export const App = () => {
  return (
    <Provider store={store}>
      <Homepage />
    </Provider>
  )
}
