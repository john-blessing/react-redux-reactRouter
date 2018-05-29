// mutations

const { combineReducers } = require('redux')
const types = require('./types')

// 用户信息
const userInfo = (state = {name: 'tony'}, action) => {
    switch (action.type) {
        case types.SET_NAME:
            return {...state, ...{ name: action.text }}
        default:
            return state;
    }
}


export default combineReducers({ userInfo })