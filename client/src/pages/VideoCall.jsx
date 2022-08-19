import React from "react";
import { useParams } from "react-router-dom";
import VideoCallComponent from "../Components/VideoCall/VideoCallComponent";
function VideoCall() {
  const chat_id = useParams().id;
  return (
    <div className="flex justify-around">
      <VideoCallComponent chat_id = {chat_id} />
      <div className="w-full lg:pl-20">
      </div>
    </div>
  );
}

export default VideoCall;