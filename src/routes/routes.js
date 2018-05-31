import React from 'react'
import Loadable from 'react-loadable';

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

const routes = [{
    path: '/',
    component: Home
}, {
    path: '/home',
    component: Home
}, {
    path: '/about/:id/company',
    component: About
}, {
    path: '/login',
    component: Login
}, {
    path: '/about',
    component: About
}, {
    path: '/error',
    component: Error
}]

export default routes