import React from 'react'
import loading from './loading.gif'
function Spinner() {
  return (
    <div>
        <img className="mx-auto w-[75px] mt-[160px]"src={loading} alt="" />
    </div>
  )
}

export default Spinner