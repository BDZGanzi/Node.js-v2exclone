import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ZeitProvider, CssBaseline } from '@zeit-ui/react';
import { Provider } from 'react-redux'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <ZeitProvider>
      <CssBaseline />
      <App />
    </ZeitProvider>
  </Provider>,
  document.getElementById('root')
);
