
import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import mystore from '../store'
import routes from './routes'

const middleware = [thunk];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}

const store = createStore(mystore, applyMiddleware(...middleware))

export default class Myrouter extends React.Component {
    render() {
        return (<Provider store={store}>
            <Router>
                <Switch>
                    {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />)}
                </Switch>
            </Router>
        </Provider>)
    }
}