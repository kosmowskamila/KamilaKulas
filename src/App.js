import React from 'react';
import './App.css';
import SiteLayout from "./SiteLayout";
import {ThemeProvider} from 'styled-components';
import theme from './theme';
import Router from "./Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SiteLayout>
        <Router/>
      </SiteLayout>
    </ThemeProvider>
  );
}

export default App;
