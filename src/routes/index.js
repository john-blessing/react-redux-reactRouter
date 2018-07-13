
import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import mystore from '../store'
import Loadable from 'react-loadable';
import * as user from '../api/user'

const Loading = ({ error, pastDelay }) => {
    if (error) {
        return <div>Error!</div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
}

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

const Login = Loadable({
    loader: () => import('../plugins/login/Login'),
    loading: Loading
})

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(mystore, applyMiddleware(...middleware))

class Myrouter extends React.Component {
    componentDidMount() {
        this.handleQueryCurrentUser()
    }

    handleQueryCurrentUser() {
        user.current().then(res => {
            let data = res.data
            store.dispatch({
                type: 'SET_USER_INFO',
                value: data.content
            })
        })
    }
    
    handleRender() {
        return (<Provider store={store}>
        <Router>
            <Layout style={{height: '100vh'}}>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/About" component={About} />
                <Route path="/error" component={Error} />
                <Route path="*" redirect="/home" />
            </Switch>
            </Layout>
        </Router>
        </Provider>)
    }
    render() {
        return this.handleRender()
    }
}

export default Myrouter