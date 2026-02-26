import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createGlobalStyle } from 'styled-components'

import { App } from './App.tsx'

import woff2 from './fonts/source-sans-pro-v11-latin-regular.woff2'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
    overscroll-behavior-y: none;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-display: optional;
    src:
      local('Source Sans Pro Regular'),
      local('SourceSansPro-Regular'),
      url(${woff2}) format('woff2');
  }
`

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)
