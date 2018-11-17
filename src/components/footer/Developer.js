import React from 'react'

const Developer = (props) => {
  return(
    <p className="developer">
      <span className="d-block font-weight-bold">
        {props.name}
      </span>

      <span className="d-block">
        { Object.keys(props).includes("realSkill") && <s>{props.realSkill}</s> }
        <span> {props.position}</span>
      </span>
    </p>
  )
}

export default Developer