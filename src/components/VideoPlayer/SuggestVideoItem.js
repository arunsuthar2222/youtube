import React from 'react'
import { Link } from 'react-router-dom'
function SuggestVideoItem({video}) {
    const videoData = {
        videoId : video.id.videoId,
        thumbnail : video.snippet.thumbnails.high.url,
        channelTitle: video.snippet.channelTitle,
        title: video.snippet.title
      }
  return (
    <Link to={`/video/${videoData.videoId}`}>
    <div className='shadow-2xl pb-3 my-5'>
        <div className='overflow-hidden'>
        <img className='w-full -my-8' src={videoData.thumbnail} alt="" />
        </div>
        <div className='p-3 py-4'>
            <h5 className='text-xl font-bold'>{videoData.title.length > 63
            ? videoData.title.slice(0, 62) + "..." : videoData.title}</h5>
            <p className='font-bold text-gray-700 pt-2'>{videoData.channelTitle}</p>
        </div>
    </div>
    </Link>
  )
}

export default SuggestVideoItem