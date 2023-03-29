import React from 'react'
import {AiFillHome} from 'react-icons/ai'
import {MdOutlineExplore} from 'react-icons/md'
import {MdOutlineSubscriptions} from 'react-icons/md'
import {MdOutlineVideoLibrary} from 'react-icons/md'
function Sidebar() {
  return (
    <div className="sticky top-14 hidden md:block">
    <div className='w-[70px] text-center left-0'>
        <ul className='pt-2 space-y-1.5 text-gray-700'>
          <li className='hover:bg-gray-200 py-2.5'><a href="">
            <AiFillHome className='text-xl icon mx-auto'/>
            <p className='text-sm py-0.5'>Home</p>
            </a></li>

            <li className='hover:bg-gray-200 py-2.5'><a href="">
            <MdOutlineExplore className='text-xl mx-auto'/>
            <p className='text-sm py-0.5'>Explore</p>
            </a></li>

            <li className='hover:bg-gray-200 py-2.5'><a href="">
            <MdOutlineSubscriptions className='text-xl mx-auto'/>
            <p className='text-sm py-0.5'>Subscrip..</p>
            </a></li>

            <li className='hover:bg-gray-200 py-2.5'><a href="">
            <MdOutlineVideoLibrary className='text-xl mx-auto'/>
            <p className='text-sm py-0.5'>Library</p>
            </a></li>

            
        </ul>
    </div>
    </div>
  )
}

export default Sidebar