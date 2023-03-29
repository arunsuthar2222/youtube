import React, {useState, useEffect} from 'react'
import logo from './reactLogo.jpg'
import { Link } from 'react-router-dom';
import { fetchFromAPI } from '../../utils/api'
function HomeItem({video}) {
  const [avatar, setAvatar] = useState(null);
  const videoData = {
    videoId: video.id.videoId,
    publishedAt: video.snippet.publishedAt,
    channelId: video.snippet.channelId,
    thumbnail : video.snippet.thumbnails.high.url,
    channelTitle: video.snippet.channelTitle,
    title: video.snippet.title
  }
  
  function timeSince(date) {

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }  

useEffect(()=>{
  fetchFromAPI(`channels?part=snippet&id=${videoData.channelId}`)
  .then(res => setAvatar(res[0].snippet.thumbnails.high.url))
}, [videoData.channelId])



  return (
    <Link to={`/video/${videoData.videoId}`}>
    <div className="mx-auto sm:w-auto hover:scale-[1.06] rounded-[3px] mt-2.5 box-shadow pb-2.5 duration-75 h-full">
      <div className=' bg-gray-300 overflow-hidden'>
                    <img className='-my-9 md:-my-7 ' src={videoData.thumbnail} alt="logo" />
</div>
                    <div className="flex justify-start items-start mt-4 w-full">
                    <img className='w-10 h-10 rounded-full mx-3' src={avatar ? avatar : logo} />
                      
                        <div className="px-2">
                            <h3 className="uppercase text-[15px] font-medium">{videoData.title.length > 44 ? videoData.title.substring(0, 43) + '...' : videoData.title}</h3>
                            <p className="text-[14.4px] font-[450] font-sans antialiased text-gray-500 font-medium">{videoData.channelTitle
} <span><svg className="w-3 inline-block pb-0.5 text-gray-300 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1d9agag" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="CheckCircleIcon"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></span></p>
                            <p className="text-sm antialiased text-gray-400 font-medium">{timeSince(new Date(videoData.publishedAt))} ago</p>
                        </div>
                        
                    </div>
                </div>
                </Link>
  )
}

export default HomeItem