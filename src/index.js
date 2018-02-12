import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Myrouter from './routes'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Myrouter />, document.getElementById('root'));
registerServiceWorker();
