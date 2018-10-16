import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import fieldReducer from './componet/fieldReducer'
import Field from './componet/field';
import * as serviceWorker from './serviceWorker';

const reducers = combineReducers({
  field: fieldReducer
})

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <Field initialValue='Teste' />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
