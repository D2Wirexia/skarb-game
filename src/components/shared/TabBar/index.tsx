import React, { createContext, useCallback, useContext, useRef } from 'react'

import { TabBarButton, TabBarContainer } from './styles'

import { Icon, IconType } from '~/components/shared'
import { Color } from '~/constants'

export interface ITabBarContext {
  activeTab: string | null
  onChange: (key: string) => void
}

interface IProps extends ITabBarContext {
  children: React.ReactNode
}

interface IItemProps {
  value: string
  label: string
  icon?: IconType
}

export const TabBarContext: React.Context<ITabBarContext> = createContext<ITabBarContext>({
  activeTab: null,
  onChange: () => {},
})

const TabBar: React.FC<IProps> = ({ children, ...props }) => {
  return (
    <TabBarContext.Provider value={props}>
      <TabBarContainer>{children}</TabBarContainer>
    </TabBarContext.Provider>
  )
}

const _TabBarItem: React.FC<IItemProps> = ({ value, label, icon }) => {
  const { activeTab, onChange } = useContext<ITabBarContext>(TabBarContext)
  const tabRef = useRef<HTMLButtonElement>(null)

  const handleClick = useCallback(() => {
    onChange(value)
    tabRef.current?.scrollIntoView(false)
  }, [value, onChange, tabRef.current])

  return (
    <TabBarButton ref={tabRef} onClick={handleClick} disabled={activeTab === value}>
      {!!icon && <Icon icon={icon} width={24} height={24} fill={Color.White} />}
      {label}
    </TabBarButton>
  )
}

export default Object.assign(TabBar, {
  Item: _TabBarItem,
})
