import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

import App from './components/App.jsx';
import './App.css';
import movies from './reducers/main.jsx';

const store = createStore(movies);
console.log('store', store);
console.log('STATE', store.getState());


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
