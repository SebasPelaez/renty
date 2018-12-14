import React from 'react';
import './Spinner.scss';

// Heavily inspired by https://codepen.io/nrdobie/pen/jqswe
const Spinner = ({ size = 'small', ...props }) => {
  const className = `spinner ${size}`
  return (
    <div className={className}>
      <svg width="1em" height="1em">
        <circle cx="0.5rem" cy="0.5rem" r="0.5rem" />
      </svg>
    </div>
  )
}

export default Spinner