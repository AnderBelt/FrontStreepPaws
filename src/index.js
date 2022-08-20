import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes/Routes';
import {FirebaseAppProvider} from 'reactfire'
import firebaseConfig from './firebase-config.js'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

