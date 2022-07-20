import React from 'react';
import Router from './Router/Router';
import GlobalState from './Components/Global/GlobalState';

function App() {
  return (
    <GlobalState>
    <Router/>
    </GlobalState>
  );
}

export default App;
