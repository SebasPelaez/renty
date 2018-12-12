import * as actions from '../../src/actions/alert'

describe('Alert actions', () => {
  it('should create an action to add alert', () => {
    const alertMock = {
      message: 'Not Found!',
      type: 'info'
    }
    const expectedAction = {
      type: actions.ADD_ALERT,
      alert: alertMock
    }
    expect(actions.addAlert(alertMock.message, alertMock.type)).toEqual(expectedAction)
  })
})