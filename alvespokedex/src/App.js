import React from 'react';
import Router from './Router/Router';
import GlobalState from './Components/Global/GlobalState';
import Header from './Components/Header'

function App() {
  return (
    <GlobalState>
    <Router/>
    </GlobalState>
  );
}

export default App;
