const initialData = {
  name: ''
}

const mutations = {
  'SET_NAME': (state, payload) => {
      return {state, ...{name: payload}}
  }
}

const userInfo = (state = initialData, action) => {
  return mutations[action.type] ? mutations[action.type](state, action.value) : state
}

export default userInfo