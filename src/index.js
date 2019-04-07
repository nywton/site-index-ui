import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './vendor/flat-ui/dist/css/vendor/bootstrap.min.css';
import './vendor/flat-ui/dist/css/flat-ui.min.css';
import ReactDOM from 'react-dom';
import './index.css';



ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();