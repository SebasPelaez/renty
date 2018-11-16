import React from 'react'
import { DateRangePicker } from 'react-dates'
import PropTypes from 'prop-types'
import momentPropTypes from 'react-moment-proptypes';
import moment from 'moment';
import omit from 'lodash/omit';
import 'react-dates/lib/css/_datepicker.css';

const propTypes = {
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
}

const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  startDate: null,
  endDate: null,

  startDateId: 'startDate',
  startDatePlaceholderText: 'Fecha inicial',
  endDateId: 'endDate',
  endDatePlaceholderText: 'Fecha final',    
  required: true,    
  showDefaultInputIcon: true,    

  numberOfMonths: 1,

  displayFormat: () => moment.localeData().longDateFormat('L'),
  monthFormat: 'MMMM YYYY',

  stateDateWrapper: date => date,
}

const datepickerWrapper = (props) => {
  const omitedProps = omit(props, [
    'autoFocus',
    'autoFocusEndDate',
    'initialStartDate',
    'initialEndDate',
    'stateDateWrapper',
  ]);
  return (
    <DateRangePicker
                {...omitedProps}
                showClearDates
                onDatesChange={props.onDatesChange}
                onFocusChange={props.onFocusChange}
                focusedInput={props.focusedInput}
                startDate={props.startDate}
                endDate={props.endDate} />
  )
}

datepickerWrapper.propTypes = propTypes;
datepickerWrapper.defaultProps = defaultProps;

export default datepickerWrapper;