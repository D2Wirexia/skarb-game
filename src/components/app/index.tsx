import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './styles'

import AppHelmet from '~/components/app/AppHelmet'
import AppProvider from '~/components/app/AppProvider'
import AppRoute from '~/components/app/AppRoute'
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
            <AppProvider>
              <GlobalStyles />
              <AppHelmet />
              <AppRoute />
              <ToastMessage />
            </AppProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default React.memo(App)
