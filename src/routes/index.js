
import React from 'react'
import { Provider } from 'react-redux'
import mystore from '../store'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from './routes';
import Sidebar from '../components/sidebar/Sidebar';

import { Layout } from 'antd';

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(mystore, applyMiddleware(...middleware))

export default class Myrouter extends React.Component {
    render() {
        return (<Provider store={store}>
            <Router>
                <Layout style={{ minHeight: '100vh' }} >
                    <Sidebar />
                    <Switch>
                        {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />)}
                    </Switch>
                </Layout>
            </Router>
        </Provider>)
    }
}