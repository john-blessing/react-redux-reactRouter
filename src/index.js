import './index.css';
import 'antd/dist/antd.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Myrouter from './routes'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Myrouter />, document.getElementById('root'));
registerServiceWorker();
