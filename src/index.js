import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './components/login';
import {Provider} from "react-redux";
import store from "./state/store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <LoginComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

