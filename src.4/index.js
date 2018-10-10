import React from 'react';
import ReactDOM from 'react-dom';
import Family from './componet/family';
import Member from './componet/member';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Family  lastName='silva'>
    <Member name='Maria' />
    <Member name='Rafael' />
    <Member name='Julia' />
  </Family>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
