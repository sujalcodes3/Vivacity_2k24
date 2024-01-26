import React from 'react'
import star from "../assets/star7.svg"

const Star = ({top,left,right}) => {
  return (
    <div className={`absolute lg:block hidden ${top} ${right} ${left} w-[40px] h-[40px]`}>
      <img src={star} alt="" />
    </div>
  )
}

export default Star
