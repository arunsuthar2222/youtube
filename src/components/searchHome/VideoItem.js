import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/api";
import { Link } from "react-router-dom";
import logo from "./reactLogo.jpg";
function VideoItem({ video }) {
  const [avatar, setAvatar] = useState(null);
  const [views, setViews] = useState(null);
  const videoData = {
    videoId: video.id.videoId,
    publishedAt: video.snippet.publishedAt,
    channelId: video.snippet.channelId,
    thumbnail: video.snippet.thumbnails.high.url,
    channelTitle: video.snippet.channelTitle,
    title: video.snippet.title,
    description: video.snippet.description,
  };

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

  // useEffect(()=>{
  //   fetchFromAPI(`channels?part=snippet&id=${videoData.channelId}`)
  //   .then(res => setAvatar(res[0].snippet.thumbnails.high.url))
  // }, [videoData.channelId])

  // useEffect(()=>{
  // fetchFromAPI(`videos?part=contentDetails,snippet,statistics&id${videoData.videoId}`)
  // .then(res => setViews(res[0].statistics.viewCount))
  // }, [videoData.videoId])

  return (
    <div>
      <Link to={`/video/${videoData.videoId}`}>
        <div
          className="flex flex-col md:flex-row items-start shadow-lg
            hover:shadow-xl my-6 hover:bg-gray-100"
        >
          <div className="rounded-l overflow-hidden  w-screen md:w-[350px] ">
            <img src={videoData.thumbnail} className="-my-9 w-full" alt="" />
          </div>
          <div className="mt-2 px-4  flex-1">
            <h4 className="text-lg font-semibold">{videoData.title}</h4>
            <p className="text-sm text-gray-500 -pt-1.5">
              {timeSince(new Date(videoData.publishedAt))} ago
            </p>
            <div className="flex py-2 items-center">
              <img
                className="rounded-full h-8 w-8"
                src={avatar ? avatar : logo}
                alt=""
              />
              <p className="px-2 text-gray-600">{videoData.channelTitle}</p>
              <div className="text-gray-500">
                <svg
                  className="w-3 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1d9agag"
                  focusable="false"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  data-testid="CheckCircleIcon"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
                </svg>
              </div>
            </div>
            <p className="text-sm pb-4 hidden md:block text-gray-600">
              {videoData.description}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default VideoItem;
