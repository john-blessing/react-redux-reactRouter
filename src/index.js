// import './index.css';
import 'antd/dist/antd.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Myrouter from './routes';
import registerServiceWorker from './registerServiceWorker';
import io from 'socket.io-client';

const socket = io('http://localhost:8999');

socket.on('connect', async () => {
  socket.emit('join', {message: 'ok'})
});

socket.on('message', async (data) => {
  console.log(data)
})

ReactDOM.render(<Myrouter />, document.getElementById('root'));
registerServiceWorker();
