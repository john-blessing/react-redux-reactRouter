const initialData = {
  userInfo: {}
}

const mutations = {
  'SET_USER_INFO': (state, payload) => {
      return {state, ...{ userInfo: payload }}
  }
}

const base = (state = initialData, action) => {
  return mutations[action.type] ? mutations[action.type](state, action.value) : state
}

export default base