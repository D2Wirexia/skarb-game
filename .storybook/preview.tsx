import type { Preview } from '@storybook/react'
import type { PartialStoryFn, StoryContext } from '@storybook/types'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { store } from '~/store'
import { GlobalStyles } from '~/components/app/styles'
import '~/i18n'

const withProviders = (Story: PartialStoryFn<any, any>, context: StoryContext) => (
  <BrowserRouter>
    <Provider store={store}>
      <GlobalStyles />
      <Story {...context} />
    </Provider>
  </BrowserRouter>
)

export const parameters = {
  backgrounds: {
    default: 'background',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#222222' },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [withProviders]

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
