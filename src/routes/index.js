
import React from 'react'
import { Provider } from 'react-redux'
import mystore from '../store'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import asyncComponent from '../components/AsyncComponent';
import { Layout } from 'antd';
import Sidebar from '../components/sidebar/Sidebar';
const Home = asyncComponent(() => import('../plugins/home/Home'));
const Error = asyncComponent(() => import('../plugins/error/Error'));
const About = asyncComponent(() => import('../plugins/about/About'));


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(mystore, applyMiddleware(...middleware))

const routes = [{
    path:'/',
    component: Home
},{
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