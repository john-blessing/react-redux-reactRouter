import Loadable from 'react-loadable';
import Loading from '../components/Loading';

const Login = Loadable({
  loader: () => import('../plugins/login/Login'),
  loading: Loading
})

const Error = Loadable({
  loader: () => import('../plugins/error/Error'),
  loading: Loading
})

export default [{
  path: '/login',
  component: Login,
  data: {isFullPage: true}
}, {
  path: '/error',
  component: Error
}]