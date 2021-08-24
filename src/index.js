import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './redux/reducers';

//creating a store 
//that takes in reducer as a parameter
//basically store-> states+reducers
let myStore = createStore(reducer)

ReactDOM.render(
  //wraping the APP component with the store
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
