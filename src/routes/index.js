import React from 'react'
import { Provider } from 'react-redux'
import App from '../plugins/App'
import mystore from '../store'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

let store = createStore(mystore);

export default class Myrouter extends React.Component {
    render(){
        return (<Provider store={store}>
                    <Router>
                        <Route path="/" component={App} />
                    </Router>
                </Provider>)
    }
}

