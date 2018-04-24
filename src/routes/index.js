
import React from 'react'
import {Provider} from 'react-redux'
import mystore from '../store'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'


import asyncComponent from '../components/AsyncComponent';
import {Layout} from 'antd';
import Sidebar from '../components/sidebar/Sidebar';
const Home = asyncComponent(() => import('../plugins/home/Home'));
const Error = asyncComponent(() => import('../plugins/error/Error'));
const About = asyncComponent(() => import('../plugins/about/About'));


const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(mystore, applyMiddleware(...middleware))

export default class Myrouter extends React.Component {
    render() {
        return ( <Provider store = {store}> 
                    <Router> 
                        <Layout style = {{ minHeight: '100vh'}} > 
                            <Sidebar / > 
                            <Switch>
                                <Route exact path = '/' component = {Home} /> 
                                <Route path = "/home" component = {Home} /> 
                                <Route path = "/about/:id" component = {About} ></Route> 
                                <Route path = "/404" component = {Error} />
                                <Redirect from="*" to="/404" />
                            </Switch>
                        </Layout> 
                    </Router> 
                </Provider> )
    }
}