import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import * as serviceWorker from './serviceWorker';

import { AppContextProvider } from './store/AppContext';

import './assets/css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <Home />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
