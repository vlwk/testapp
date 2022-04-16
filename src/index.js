import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './index.css';
import MainContainer from './components/containers/MainContainer';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) 
);

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
        <MainContainer />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
