import React, { useCallback, useContext, useRef } from 'react'

import { TabBarButton } from './styles'
import { type ITabBarContext, TabBarContext } from './TabBar'

interface IProps {
  value: string
  label: string
}

const TabBarItem: React.FC<IProps> = ({ value, label }) => {
  const { activeTab, onChange } = useContext<ITabBarContext>(TabBarContext)
  const tabRef = useRef<HTMLButtonElement>(null)

  const handleClick = useCallback(() => {
    onChange(value)
    tabRef.current?.scrollIntoView(false)
  }, [value, onChange, tabRef.current])

  return (
    <TabBarButton ref={tabRef} onClick={handleClick} disabled={activeTab === value}>
      {label}
    </TabBarButton>
  )
}

export default React.memo(TabBarItem)
