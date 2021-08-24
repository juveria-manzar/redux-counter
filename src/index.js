import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
import counterReducer from './redux/counterReducer';

import loginReducer from './redux/loginReducer';

//creating a store 
//that takes in reducer as a parameter
//basically store-> states+reducers

let rootReducer = combineReducers({
  count: counterReducer,
  logged: loginReducer
})
let myStore = createStore(rootReducer)

ReactDOM.render(
  //wraping the APP component with the store
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
