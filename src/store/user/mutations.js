// state = user module 的 state
// this.state = vuex 的 state
// this.state.module名 = 其他 module 的 state
// ex : this.state.user...

export const login = (state, data) => {
  state.token = data.token
  state.email = data.email
  state.cart = data.cart
}

export const logout = (state, data) => {
  state.token = ''
  state.email = ''
  state.cart = 0
}

export const getInfo = (state, data) => {
  state.email = data.email
  state.cart = data.cart
}

export const extend = (state, data) => {
  state.token = data
}

export const updateCart = (state, data) => {
  state.cart = data
}
