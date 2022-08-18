import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Chats from "../Components/Chat/Chats";
import ChatWindow from "../Components/Chat/ChatWindow";
import { getCurrentUsersChats } from "../utils/apiClientService";


function Chat() {


  const dispatch = useDispatch();

 

  useEffect(()=>{
    const iffy = async () => {
      const data = await getCurrentUsersChats(); 
      
      dispatch({
        type: "SET_CHATS",
        payload : data.data
      })
   
    };
    iffy()
  },[])


  return (
    <div className="flex">
      <Chats/>
      <ChatWindow />
    </div>
  );
}

export default Chat;
