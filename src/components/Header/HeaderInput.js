import React from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import SearchInput from './SearchInput'
import { handleHideSearch } from '../../redux/action/action'
import {AiTwotoneAudio} from 'react-icons/ai'
function HeaderInput() {
    const dispatch = useDispatch()
  return (
    <div className="px-2.5 h-14">
      <div className="mx-auto  h-full flex  justify-between items-center">
        <div>
        <button className='btn' onClick={()=> dispatch(handleHideSearch())}>
            <AiOutlineArrowLeft />
        </button>
        </div>
        <div className='flex-1 mx-3 flex items-center'>
        <SearchInput />
        <button className='btn ml-3'>
        <AiTwotoneAudio />
      </button>
        
        </div>
       </div>
      
    </div>
  )
}

export default HeaderInput