import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './components/login';
import {Provider} from "react-redux";
import store from "./state/store"
import "../src/assets/app.less"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <LoginComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

