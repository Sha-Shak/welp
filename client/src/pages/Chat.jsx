import React from "react";
import Chats from "../Components/Chat/Chats";
import ChatWindow from "../Components/Chat/ChatWindow";
function Chat() {
  return (
    <div className="flex">
      <Chats />
      <ChatWindow />
    </div>
  );
}

export default Chat;
