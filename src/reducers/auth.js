const authReducer = (state = { authError: null }, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        authError: null
      }
    case 'SIGNOUT_SUCCESS':
    case 'SIGNOUT_ERROR':
    default:
      return state
  }
}

export default authReducer