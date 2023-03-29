import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {BiSearch} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { turnOnLoading } from '../../redux/action/action'
function SearchInput() {
    const dispatch = useDispatch
    const [text, setText] = useState('')
    const navigate = useNavigate()
    const handleInput = (e)=>{
        setText(e.target.value)
    }
function handleSubmit(e){
    e.preventDefault()
    if(text){    
     navigate(`/search/${text}`)
     dispatch(turnOnLoading())
    }
}
  return (
    
        <form onSubmit={handleSubmit} className='flex-1 flex searchInput rounded-full'>
            <div className='flex-1 relative'>
            <input value={text} onChange={handleInput} type="text" placeholder='Search' className='w-full border p-2 px-4 font-medium rounded-l-full border-gray-200 focus:outline-none focus:border-gray-300'  />
            {
                text && <button onClick={() => setText('')} className='btn absolute right-1.5 p-2 top-0.5'>
                <RxCross2 />
            </button>
            }
            </div>
            <button type='submit' className='text-xl px-5 p-2 border-t border-b border-gray-200 border-r  rounded-r-full hover:bg-gray-100'>
            <BiSearch />
            </button>
        </form>
        
  )
}

export default SearchInput