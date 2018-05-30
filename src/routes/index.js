
import React from 'react'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'

import mystore from '../store'
import routes from './routes'
import Sidebar from '../components/sidebar/Sidebar'

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
                    {/* <Sidebar /> */}
                    <Switch>
                        {routes.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />)}
                    </Switch>
                </Layout>
            </Router>
        </Provider>)
    }
}

// class FullPage extends React.Component {
//     render () {
//         return (
//             <Provider store={store}>
//                 <Router>
//                     <Layout style={{ minHeight: '100vh' }} >
//                         <Switch>
//                             {fullPages.map((route, i) => <Route exact key={i} path={route.path} component={route.component} />)}
//                         </Switch>
//                     </Layout>
//                 </Router>
//             </Provider>
//         )
//     }
// }

// export default class Myrouter extends React.Component {
//     constructor () {
//         super()
//         this.isFull = false
//     }

//     componentDidMount () {
     
//     }

//     render () {

//         if(window.location.pathname === '/login'){
//             this.isFull = false
//         } else {
//             this.isFull = true
//         }

//         return (
//             this.isFull ? <ContentPage /> : <FullPage />
//         )
//     }
// }