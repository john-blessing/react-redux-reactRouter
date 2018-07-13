import api from './config'

export function login(username, password){
  return api.post('login', {username, password})
}

export function current(){
  return api.post('current')
}

export function logout(){
  return api.post('logout')
}