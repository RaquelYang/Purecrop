export const admin = (state) => {
  return {
    isAdmin: state.account.length > 0,
    ...state
  }
}
