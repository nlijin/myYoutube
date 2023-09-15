import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info);

  const { snippet, statistics } = info;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="m-2 max-w-xs bg-gray-50">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <div className="my-2 p-2">
        <p className="font-bold">{title}</p>
        <p className="">{channelTitle}</p>
        <p>views: {statistics.viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
