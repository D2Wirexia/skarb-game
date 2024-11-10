import React, { createContext } from 'react'

import { TabBarContainer } from './styles'
import TabBarItem from './TabBarItem'

export interface ITabBarContext {
  activeTab: string | null
  onChange: (key: string) => void
}

interface IProps extends ITabBarContext {
  children: React.ReactNode
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

export default Object.assign(TabBar, {
  Item: TabBarItem,
})
