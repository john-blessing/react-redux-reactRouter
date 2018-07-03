export const setName = (value) => (dispatch, getState) => {
    dispatch({
        type: 'SET_NAME',
        value
    })
}