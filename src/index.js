import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './Services/Reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);


