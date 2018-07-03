// mutations
const { combineReducers } = require('redux')

const actions = {}

const userInfo = (state = {name: 'tony'}, action) => {
    switch (action.type) {
        case 'SET_NAME':
        return {state, ...{name: action.value}}
        default:
        return state
    }
}

export default combineReducers({ 
    userInfo
})