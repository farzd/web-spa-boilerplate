import React from 'react'
import { ThemeProvider, withTheme } from 'styled-components'
import Home from './screens/Home'
import { Store } from './utils/store'
import rem from './styles/style-helpers'
import variables from './styles/variables/colours.scss'
import breakpoints from './styles/variables/breakpoints.scss'
import './styles/global.scss'

function App() {
  const theme = {
    ...variables,
    ...breakpoints,
    rem
  }

  return (
    <Store>
      <ThemeProvider theme={withTheme(theme)}>
        <Home />
      </ThemeProvider>
    </Store>
  )
}

export default App
