import React from 'react';
import GlobalStyle from './styles/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
