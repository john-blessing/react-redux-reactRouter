export const SET_NAME = 'SET_NAME'

// actions
const receiveName = (text) => ({
    type: SET_NAME,
    text
})

export const setName = (value) => (dispatch, getState) => {
    dispatch(receiveName(value))
}