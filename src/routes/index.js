
import React from 'react'
import Loadable from 'react-loadable';
import { Provider } from 'react-redux'
import mystore from '../store'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Loading from '../components/Loading';
import Sidebar from '../components/sidebar/Sidebar';

import { Layout } from 'antd';

const Home = Loadable({
    loader: () => import('../plugins/home/Home'),
    loading: Loading
})

const Error = Loadable({
    loader: () => import('../plugins/error/Error'),
    loading: Loading
})

const About = Loadable({
    loader: () => import('../plugins/about/About'),
    loading: Loading
})

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(mystore, applyMiddleware(...middleware))

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/about',
    component: About
}]

export default class Myrouter extends React.Component {
    render() {
        return (<Provider store={store}>
            <Router>
                <Layout style={{ minHeight: '100vh' }} >
                    <Sidebar />
                    <Switch>
                        {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />)}
                        <Route component={Error} />
                    </Switch>
                </Layout>
            </Router>
        </Provider>)
    }
}