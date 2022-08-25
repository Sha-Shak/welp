import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Chats from "../Components/Chat/Chats";
import ChatWindow from "../Components/Chat/ChatWindow";
import Sidebar from "../Components/Sidebar/Sidebar";
import TopBar from "../Components/TopBar/TopBar";
import { getCurrentUsersChats } from "../utils/apiClientService";

function Chat() {
  const dispatch = useDispatch();

  useEffect(() => {
    const iffy = async () => {
      const data = await getCurrentUsersChats();

      dispatch({
        type: "SET_CHATS",
        payload: data.data,
      });
    };
    iffy();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <TopBar />
        <div className="container mx-auto">
          <div className="flex">
            <Chats />
            <ChatWindow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
