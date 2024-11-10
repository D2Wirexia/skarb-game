import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyles } from './styles'

import { ToastMessage } from '~/components/shared'
import HelmetApp from '~/HelmetApp'
import RouteApp from '~/RouteApp'
import { store, persistor } from '~/store'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store} key="provider">
        <PersistGate persistor={persistor}>
          <GlobalStyles />
          <HelmetApp />
          <RouteApp />
          <ToastMessage />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  )
}

export default React.memo(App)
