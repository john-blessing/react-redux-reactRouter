import {
    combineReducers
} from 'redux'
import * as types from './action'

const userInfo = {
    name: 'tony'
}

const todoApp = function (state = userInfo, action) {
    switch (action.type) {
        case types.SET_NAME:
            return Object.assign({}, state, {
                name: action.text
            })
        default:
            return state;
    }
}


export default combineReducers({ todoApp })