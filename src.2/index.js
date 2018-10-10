import React from 'react';
import ReactDOM from 'react-dom';
import First, {Second} from './componet/fristComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <div>
    <First texto="Componente 1 ok" />
    <Second texto="Componente 2 ok" />
  </div>
  
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
