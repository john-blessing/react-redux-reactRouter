import React from 'react'
import { Provider } from 'react-redux'
import App from '../pages/App';
import About from '../pages/about/About'
import mystore from '../store'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

let store = createStore(mystore);

export default class Myrouter extends React.Component {
    render(){
        return (<Provider store={store}>
                    <Router>
                        <div>
                            <Route exact path="/" component={App} />
                            <Route path="/about" component={About} />
                        </div>
                    </Router>
                </Provider>)
    }
}

