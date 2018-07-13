export const setUserInfo = (value) => (dispatch, getState) => {
    dispatch({
        type: 'SET_USER_INFO',
        value
    })
}