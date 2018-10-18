import React from 'react'

const Developer = (props) => {
  return(
    <p className="developer">
      <span className="d-block">
        {props.name}
      </span>

      <small>
        { Object.keys(props).includes("realSkill") && <s>{props.realSkill}</s> }
        <span> {props.position}</span>
      </small>
    </p>
  )
}

export default Developer