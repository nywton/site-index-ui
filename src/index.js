import React from 'react';
import App from './App';
import 'flat-ui/bootstrap/css/bootstrap.css';
import 'flat-ui/css/flat-ui.css';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
registerServiceWorker();
