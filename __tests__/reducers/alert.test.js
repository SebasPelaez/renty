import { alerts } from '../../src/reducers/alert'
import { alertMock } from '../../src/constants'
import * as actions from '../../src/actions/alert'

describe('Alerts reducer', () => {
  it('should return the initial state', () => {
    expect(alerts(undefined, {})).toEqual([])
  })

  it('should return the initial state', () => {
    const addAlertCreator = {
      type: actions.ADD_ALERT,
      alert: alertMock
    }
    expect(alerts(undefined, addAlertCreator)).toEqual(
      [alertMock]
    )
  })
})