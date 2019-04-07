import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'flat-ui/bootstrap/css/bootstrap.css';
import 'flat-ui/css/flat-ui.css';
import ReactDOM from 'react-dom';
import './index.css';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyC6U8_KGIxRWwfmu3yQQBsTYuDFDYZw0Ok",
    authDomain: "site-indexer-ui.firebaseapp.com",
    databaseURL: "https://site-indexer-ui.firebaseio.com",
    projectId: "site-indexer-ui",
    storageBucket: "site-indexer-ui.appspot.com",
    messagingSenderId: "866160594211"
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
