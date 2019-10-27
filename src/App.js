import React from 'react';
import './App.css';
import MainView from "./MainView";
import {ThemeProvider} from 'styled-components';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainView/>
    </ThemeProvider>
  );
}

export default App;
