import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { fetchFromAPI } from '../utils/api';
import { getHomePageVideos, turnOnLoading } from '../redux/action/action';
function Catagory() {
  const dispatch = useDispatch()
  const catagories = ['all', 'sports', 'tech', 'web development', 'react', 'movies',
  'music', 'javascript', 'netflix', 'crypto', 'css', 'cricket', 'comedy', 'football', 'travelling', 'carryminati'];
  const [currVal, setCurrVal] = useState('all')

  useEffect(()=>{
    dispatch(turnOnLoading())
    fetchFromAPI(`search?maxResults=100&part=snippet,id&q=${currVal}`)
    .then(res =>dispatch(getHomePageVideos(res)))
    
  }, [currVal])

 
  return (
    <div className='overflow-hidden md:max-w-[93vw] ml-auto w-screen sticky top-16 bg-white z-20 pb-2'>
    <div className=' flex space-x-3 overflow-x-auto scrollbar-hide px-3 py-1.5 bg-white sticky top-14 z-10 text-center'>
        {
          catagories.map((catagory, index)=>(
            <button onClick={()=>setCurrVal(catagory)} key={index} className={`py-1.5 border border-gray-100 text-gray-800 whitespace-nowrap capitalize px-3.5 rounded-[900px] btn-large ${catagory === currVal ? `bg-slate-800 selectedBtn hover:bg-slate-700 text-slate-200` : ''}`}>{catagory}</button>
          ))
        }
    </div>
    </div>
  )
}

export default Catagory