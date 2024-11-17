import { AnimatePresence } from 'framer-motion'
import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { ConnectionLayout, AuthLayout, BoardLayout } from '~/components/layout'
import { Loader } from '~/components/shared'
import { Route as RoutePath } from '~/constants'
import { useAppSelector } from '~/store'

const Menu = lazy(() => import('~/components/page/Menu'))
const Profile = lazy(() => import('~/components/page/Profile'))

const AppRoute: React.FC = () => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  const [renderKey, updateRenderKey] = useState<string>(new Date().toISOString())

  const location = useLocation()

  useEffect(() => {
    updateRenderKey(new Date().toISOString())
  }, [isAuthenticated])

  return (
    <Suspense fallback={<Loader.Simple size={50} />}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname + renderKey} location={location}>
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

export default React.memo(AppRoute)
