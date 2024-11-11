import { AnimatePresence } from 'framer-motion'
import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { ConnectionLayout, AuthLayout, BoardLayout } from '~/components/layout'
import { Loader } from '~/components/shared'
import { Route as RoutePath } from '~/constants'
import { useAppSelector } from '~/store'

const Menu = lazy(() => import('~/components/page/Menu'))
const Profile = lazy(() => import('~/components/page/Profile'))

const RouteApp: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)

  const location = useLocation()

  return (
    <Suspense fallback={<Loader.Simple size={50} />}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname + String(isAuthenticated)} location={location}>
          <Route path={RoutePath.Connect} element={<ConnectionLayout />}>
            {!isAuthenticated && <Route index element={<AuthLayout />}></Route>}
            {isAuthenticated && <Route index element={<Menu />} />}
            <Route element={<BoardLayout />}>
              <Route path={RoutePath.Profile} element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  )
}

export default React.memo(RouteApp)
