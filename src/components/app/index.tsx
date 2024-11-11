import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles'

import HelmetApp from '~/components/app/HelmetApp'
import RouteApp from '~/components/app/RouteApp'
import { ToastMessage } from '~/components/shared'
import { useTheme } from '~/hooks'
import { store, persistor } from '~/store'

const App: React.FC = () => {
  const theme = useTheme()

  return (
    <BrowserRouter>
      <Provider store={store} key="provider">
        <PersistGate persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <HelmetApp />
            <RouteApp />
            <ToastMessage />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default React.memo(App)
