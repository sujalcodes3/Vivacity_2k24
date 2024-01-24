import React from 'react'
import star from "../assets/star7.svg"

const Star = ({top,left,right}) => {
    console.log(left);
  return (
    <div className={`absolute ${top} ${right} ${left}`}>
      <img src={star} alt="" />
    </div>
  )
}

export default Star
