import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//theme
import { ThemeProvider } from 'styled-components'
import ThemeObject from './theme/index'

ReactDOM.render(
  <ThemeProvider theme={ThemeObject}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);