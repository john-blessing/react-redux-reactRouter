import Loadable from 'react-loadable';
import Loading from '../components/Loading';

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

const routes = [{
    path: '/',
    component: Home
},{
    path: '/home',
    component: Home
}, {
    path: '/about/:id/company',
    component: About
}, {
    path: '/about',
    component: About
}, {
    path: '/error',
    component: Error
}]

export default routes