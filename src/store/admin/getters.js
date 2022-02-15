export const admin = (state) => {
  return {
    isAdmin: state.token.length > 0,
    ...state
  }
}
