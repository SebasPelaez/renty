export const ADD_ALERT = 'ADD_ALERT'

export const addAlert = (message, type = 'danger') => ({
  type: ADD_ALERT,
  alert: { message, type }
})