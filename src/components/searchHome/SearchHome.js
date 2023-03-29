import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VideoItem from "./VideoItem";
import { BsFilterRight } from "react-icons/bs";
import ChannelItem from "./ChannelItem";
import { fetchFromAPI } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
import { turnOnLoading, turnOffLoading } from "../../redux/action/action";

function SearchHome() {
  const dispatch = useDispatch();
  const { input } = useParams();
  const [videos, setVideos] = useState([]);
  const { isLoading } = useSelector((state) => state);
  useEffect(() => {
    dispatch(turnOnLoading());
    fetchFromAPI(`search?maxResults=50&part=snippet,id&q=${input}`).then(
      (res) => {
        setVideos(res);
      }
    );
    dispatch(turnOffLoading());
  }, [input]);

  return (
    <div className="md:w-[95%] mx-auto">
      <div className="border-b-2 mx-2 border-gray-200 rounded-sm py-2 ">
        <button className="flex shadow-2xl items-start py-1 px-2.5 bg-gray-100  rounded-[900px] border border-gray-300">
          <BsFilterRight className="text-3xl text-gray-700" />
          <span className="text font-sans ml-1">Filter</span>
        </button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="mt-5">
          {videos.map((video) => {
            if (video.id.videoId) {
              return <VideoItem key={video.id.videoId} video={video} />;
            } else if (video.id.channelId) {
              return <ChannelItem key={video.id.channelId} channel={video} />;
            }
          })}
        </div>
      )}
    </div>
  );
}

export default SearchHome;
