export const login = (state, data) => {
  state.token = data.token
  state.account = data.account
}

export const logout = (state, data) => {
  state.token = ''
  state.account = ''
}
export const getInfo = (state, data) => {
  state.account = data.account
}
