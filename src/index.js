import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-bootstrap/dist/react-bootstrap';
import Amplify, { Auth, API } from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);
API.configure(awsconfig);

// >>New - Configuring Auth Module
const cfg = Auth.configure(awsconfig);



//console.log(cfg);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
