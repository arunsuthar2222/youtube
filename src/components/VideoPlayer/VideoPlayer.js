import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SuggestVideoItem from "./SuggestVideoItem";
import { fetchFromAPI } from "../../utils/api";
function VideoPlayer() {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    fetchFromAPI(
      `search?relatedToVideoId=${videoId}&part=id,snippet&type=video`
    ).then((response) => setVideos(response));
  }, [videoId]);

  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails,snippet,statistics&id=${videoId}`
    ).then((res) => setTitle(res[0].snippet.title));
  }, []);
  return (
    <div className="flex items-start  flex-col md:flex-row mt-5 md:h-[88vh] md:overflow-hidden justify-between">
      <div className="h-[50vh] md:h-auto lg:ml-3">
        <iframe
          className="w-full h-[40vh] md:w-[71vw] md:h-[80vh]"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <h3 className="text-xl md:text-2xl  text-[#111] pt-1.5 px-4 font-bold">
          {title}
        </h3>
      </div>
      <div className="lg:px-4 overflow-y-scroll h-full scrollbar-hide flex-1 -mt-4 bg-slate-50">
        {videos.length > 0 &&
          videos.map((video, index) => (
            <SuggestVideoItem key={index} video={video} />
          ))}
      </div>
    </div>
  );
}

export default VideoPlayer;
