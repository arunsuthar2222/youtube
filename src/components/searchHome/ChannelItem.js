import React, { useState, useEffect } from "react";
import { fetchFromAPI } from "../../utils/api";

function ChannelItem({ channel }) {
  //  const [subscribe, setSubscribe] = useState(false)
  const channelData = {
    channelId: channel.id.channelId,
    thumbnail: channel.snippet.thumbnails.high.url,
    channelTitle: channel.snippet.channelTitle,
    description: channel.snippet.description,
  };
  return (
    <div
      className="flex py-6 px-7 md:px-0 items-center md:flex-row md:items-start shadow-lg
            hover:shadow-xl my-6"
    >
      <div className="self-center md:w-[350px] ">
        <img
          src={channelData.thumbnail}
          className="h-[110px] mx-auto w-[110px]  rounded-full"
          alt=""
        />
      </div>

      <div className="px-4 flex-1 flex justify-between items-center">
        <div className="pl-3">
          <div className="flex">
            <h4 className="text-lg font-semibold">
              {channelData.channelTitle}
            </h4>
            <svg
              className="w-5 pt-2 pl-2 MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1d9agag"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="CheckCircleIcon"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
            </svg>
          </div>
          <p className="text-sm py-2 text-gray-500">
            @{channelData.channelTitle}
          </p>
          <p className="text-[15px] pb-4 hidden md:block text-gray-700">
            {channelData.description}
          </p>
        </div>

        {/* {
                !subscribe ?<button onClick={()=> setSubscribe(true)} className='uppercase rounded px-3 py-2 text-white bg-red-500'>
                Subscribe
               </button>
               : <button onClick={()=> setSubscribe(false)} className='font-medium px-3 py-2 text-[#444]'>
               Unsubscribe 
              </button>
            } */}
      </div>
    </div>
  );
}

export default ChannelItem;
