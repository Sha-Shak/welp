import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import io from "socket.io-client";
import { getChatMessages, getChatRoom, getOtherProfile } from "../../utils/apiClientService";
import "./chat.css";
import ChatInput from "./ChatInput";
import ChatWindowNav from "./ChatWindowNav";
import Received from "./Received";
import Sent from "./Sent";

const socket = io("http://localhost:3001");

function ChatWindow() {
  const user = JSON.parse(localStorage.getItem("data")); // get current User

  const currentRoomId = useSelector((state) => state.currentChat);
  const [roomExists, setRoomExists] = useState(false);
  const [messages, setMessages] = useState([]);
  const [reciever, setReciever] = useState(null);


  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prevList) => {
        const filteredList = prevList.filter(
          (message) => message.id !== data.id
        );
        filteredList.push(data);
        return filteredList;
      });
    });
  }, []);

  useEffect(() => {
    socket.emit("join_room", currentRoomId);
  }, [currentRoomId]);

  useEffect(() => {
    const iffy = async () => {
      try {
        if (currentRoomId > 0) {
          await getChatRoom(currentRoomId)
            .then((data) => {
              setRoomExists(true);
              getChatMessages(currentRoomId)
                .then((data) => setMessages(data.data))
                .catch((e) => console.log(e));
              
              const recieverId = data.data.user_id1 === user.id ? data.data.user_id2 : data.data.user_id1;

              getOtherProfile(recieverId)
                .then((data) => setReciever(data.data))
                .catch((e) => console.log(e));

            })
            .catch((err) => console.log(err));
        }
      } catch (e) {
        console.log(e);
      }
    };

    iffy();
  }, [currentRoomId]);

  function handleSocketSubmit(msg) {
    const message = {
      content: msg,
      chat_id: currentRoomId,
      sender_id: user.id,
    };

    socket.emit("send_message", message);

    message.timestamp = new Date();

    setMessages((prevList) => [...prevList, message]);
  }

  return (
    <div className="border-2 border-gray-xlight relative h-90vh mr-6 w-2/3">
      {roomExists && (
        <div className="w-100 h-90vh flex items-center">
          <div className=" h-90vh w-full bg-white rounded border-gray-light shadow-2xl">
           
              <ChatWindowNav />
                <div
                  className="overflow-auto px-1 flex flex-col-reverse py-1"
                  style={{ height: "67vh" }}
                  id="journal-scroll"
                >
                  {messages.reverse().map((msg)=>(
                    <>
                    { msg.sender_id === user.id && <Sent content={msg.content} timestamp={msg.timestamp} /> }
                    { msg.sender_id !== user.id && <Received content={msg.content} timestamp={msg.timestamp} imgSrc={reciever ? reciever.img_url : null}/> }
                    
                    {/* <Call/> */}
                    </>
                  ))  
                  }
               
                    </div>
                   

            

            <ChatInput
              handleSocketSubmit={handleSocketSubmit}
            
            />
          </div>
        </div>
      )}
      {!roomExists && (
        <>
          <div className="w-100 h-90vh flex items-center ">
            <div className="h-90vh w-full bg-white rounded shadow-2xl">
              <div
                className="overflow-auto px-1 py-1 text-xl items-center"
                style={{ height: "67vh" }}
                id="journal-scroll"
              >
                <div className="text-gray pl-2 pt-6" style={{ margin: "auto 0 " }}>Chat Away</div>
              </div>

   
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatWindow;
