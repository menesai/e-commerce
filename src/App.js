import React from 'react';
import './App.css';
// import Home from './pages/home/Home';
// import {Switch} from 'react-router-dom';

import routes from './routes';

function App() {
  return (
     <div className="App">
        {routes}
    </div>
  );
}

export default App;
