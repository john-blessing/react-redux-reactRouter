import {
    combineReducers
} from 'redux'
import * as types from './action'


const userInfo = (state = {name: 'tony'}, action) => {
    switch (action.type) {
        case types.SET_NAME:
            return {...state, ...{ name: action.text }}
        default:
            return state;
    }
}


export default combineReducers({ userInfo })