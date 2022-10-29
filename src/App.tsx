import React from 'react';

import {AppTheme} from './AppTheme';
import Header from './components/Header';
import {ThemeProvider} from './ThemeProvider';
import MainPage from "./pages/MainPage";

const App = () => (
  <ThemeProvider>
    <AppTheme>
      <Header headerTitle={'Sort YAML'} />
      <MainPage />
    </AppTheme>
  </ThemeProvider>
);

export default App;