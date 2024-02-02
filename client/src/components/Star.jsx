import React from 'react'

const Star = ({top,left,right}) => {
  return (
    <div className={`absolute lg:block hidden ${top} ${right} ${left} w-[40px] h-[40px]`}>
      <img src='https://d3lhw1p67h4h5r.cloudfront.net/star7.svg' alt="" />
    </div>
  )
}

export default Star
