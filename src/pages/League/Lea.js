import React from 'react'

const Lea = (props) => {
  return (
    <div className='col-sm-2'>
      <div className='lea-logo'>
        <img className='w-100' src={props.logo} alt="" />
      </div>
      <div>
        <div className="lea-name">
          {props.name}
        </div>
        <div className="lea-season">
          {props.season}
        </div>
      </div>
    </div>
  )
}

export default Lea