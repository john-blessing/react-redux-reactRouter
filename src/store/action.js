// actions

const types = require('./types')

export const receiveName = (text) => ({
    type: types.SET_NAME,
    text
})

export const setName = (value) => (dispatch, getState) => {
    dispatch(receiveName(value))
}