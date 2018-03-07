import React from 'react'
import {Provider} from 'react-redux'

import Sidebar from '../components/Sidebar'
import About from '../plugins/about/About'
import Home from '../plugins/home/Home'
import ErrorPage from '../plugins/error/Error'
import {Layout} from 'antd';
import mystore from '../store'
import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

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
                            <Route exact path = '/' component = {Home} /> 
                            <Route path = "/home" component = {Home} /> 
                            <Route path = "/about" component = {About} /> 
                            <Route path="/404" component={ErrorPage} />
                        </Layout> 
                    </Router> 
                </Provider> )
    }
}