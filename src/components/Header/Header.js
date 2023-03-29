import React from 'react'
import HeaderBtn from './HeaderBtn'
import HeaderInput from './HeaderInput'
import { useSelector } from 'react-redux';


function Header() {
  const {showSearchBar} = useSelector(state => state);
 

  return (
    <div className='sticky top-0 bg-white z-10'>
      {
        (showSearchBar) ? <HeaderInput /> : <HeaderBtn />
      }

    </div>
  )
}

export default Header