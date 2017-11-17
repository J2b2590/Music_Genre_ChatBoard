import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const io = require('socket.io-client')
export const socket = io.connect('https://infinite-shore-76668.herokuapp.com/');
console.log(socket, ' socket index.js')


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
