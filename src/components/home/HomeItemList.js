import React from "react";
import HomeItem from "./HomeItem";
import { useSelector } from "react-redux";
import Spinner from "../spinner/Spinner";
function HomeItemList() {
  const { homePageVideos, isLoading } = useSelector((state) => state);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {homePageVideos.length > 0 &&
            homePageVideos.map(
              (video) =>
                video.id.videoId && (
                  <HomeItem video={video} key={video.id.videoId} />
                )
            )}
        </div>
      )}
    </div>
  );
}

export default HomeItemList;
