import React from 'react';
import ReactDOM from 'react-dom';
import LoginComponent from './components/login';
import { Provider } from "react-redux";
import store from "./state/store"
import "../src/assets/app.less"
import CNSWebPortalApp from './app/containers';
import '../node_modules/ag-grid-community/dist/ag-grid-community.amd.min.noStyle';
import '../node_modules/ag-grid-community/dist/styles/ag-grid.css';
import '../node_modules/ag-grid-community/dist/styles/ag-theme-alpine.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CNSWebPortalApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

