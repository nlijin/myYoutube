import React from "react";

const VideoCard = ({ info }) => {
  //   const { snippet, statistics } = info;
  console.log(info[0].snippet.title);

  return (
    <div className="m-2">
      <img src={info[0].snippet.thumbnails.medium.url} />
      <div className="">
        <p className="font-bold">{info[0].snippet.channelTitle}</p>
        <p>{info[0].snippet.title}</p>
        <p className="truncate">{info[0].snippet.description}</p>
        <p>{info[0].statistics.viewCount}</p>
      </div>
    </div>
  );
};

export default VideoCard;
