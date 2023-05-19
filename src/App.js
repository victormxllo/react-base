import React from 'react';
import { Router } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import history from './services/history';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Routes from './routes/index';

function App() {

  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000}/>
    </Router>
  );
}

export default App;
