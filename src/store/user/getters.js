export const user = (state) => {
  return {
    isLogin: state.email.length > 0,
    ...state
  }
}
