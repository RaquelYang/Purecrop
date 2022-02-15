export const user = (state) => {
  return {
    isLogin: state.token.length > 0,
    ...state
  }
}
