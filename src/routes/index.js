import React from 'react'
import { Provider } from 'react-redux'

import Sidebar from '../components/Sidebar'
import About from '../plugins/about/About'
import Home from '../plugins/home/Home'

import { Layout } from 'antd';
import mystore from '../store'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

let store = createStore(mystore);

export default class Myrouter extends React.Component {
    render(){
        return (<Provider store={store}>
                    <Router>
                        <Layout style={{ minHeight: '100vh' }}>
                          <Sidebar />
                          <Route exact path='/' component={Home}/>
                          <Route path="/home" component={Home} />
                          <Route path="/about" component={About} />
                        </Layout>
                    </Router>
                </Provider>)
    }
}

