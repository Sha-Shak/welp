import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import io from "socket.io-client";
import {
  getChatMessages,
  getChatRoom,
  getOtherProfile,
} from "../../utils/apiClientService";
import Call from "./Call";
import "./chat.css";
import ChatInput from "./ChatInput";
import ChatWindowNav from "./ChatWindowNav";
import Received from "./Received";
import Sent from "./Sent";

const socket = io("http://localhost:3001");

function ChatWindow() {
  
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.id) {
      navigate("/login");
    }
  }, [user]);
  
  const currentRoomId = useSelector((state) => state.currentChat);
  const [roomExists, setRoomExists] = useState(false);
  const [messages, setMessages] = useState([]);
  const [reciever, setReciever] = useState(null);
  const bottomRef = useRef(null);

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
    const getChatData = async () => {
      //switch to await async syntax
      try {
        if (currentRoomId > 0) {
          const getChatroomData = await getChatRoom(currentRoomId);
          const recieverId =
            getChatroomData.data.user_id1 === user.id
              ? getChatroomData.data.user_id2
              : getChatroomData.data.user_id1;
          setRoomExists(true);

          const getMessagesData = await getChatMessages(currentRoomId);
          setMessages(getMessagesData.data);

          const getOtherProfileData = await getOtherProfile(recieverId);
          setReciever(getOtherProfileData.data);
        }
      } catch (e) {
        console.log(e);
      }
    };

    getChatData();
    const messages = document.getElementById("journal-scroll");
    messages.scrollTop = messages.scrollHeight;
  }, [currentRoomId]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  function handleVideoCall() {
    const message = {
      content: `${user.firstname} ${user.lastname} has joined the video call`,
      chat_id: currentRoomId,
      sender_id: 0,
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
            <ChatWindowNav handleVideoCall={handleVideoCall} />
            <div
              className="overflow-auto px-1 py-1"
              style={{ height: "67vh" }}
              id="journal-scroll"
            >
              {messages.map((msg) => {
                    
                    const isRecipent = (msg.sender_id !== user.id && msg.sender_id !== 0); 
                    const isSender = (msg.sender_id === user.id);
                    if (isRecipent) {
                      return (
                        <Received
                        key={msg.id}
                        sender_id={msg.sender_id}
                        content={msg.content}
                        timestamp={msg.timestamp}
                      />
                      )
                    }

                    if(isSender) {
                      return <Sent key={msg.id} content={msg.content} timestamp={msg.timestamp} />
                    } 
                    
                    
                    return <Call key={msg.id} message={msg} />
              }
              
                                
                
              )}
              <div ref={bottomRef} />
            </div>

            <ChatInput handleSocketSubmit={handleSocketSubmit} />
          </div>
        </div>
      )}
      {!roomExists && (
        <>
          <div className="w-100 h-90vh flex items-center ">
            <div className="h-90vh w-full bg-white rounded shadow-2xl">
              <div
                className="overflow-auto px-1 py-1 text-xl text-center flex justify-center items-center"
                style={{ height: "67vh" }}
                id="journal-scroll"
              >
                <div className="bg-gray-xlight w-fit h-fit p-5 rounded-lg shadow-2xl">
                  <div
                    className="text-gray-dark pl-2 pt-6"
                    style={{ margin: "auto 0 " }}
                  >
                    Select a chat or start a new one to view it here.
                  </div>
                  <div
                    className="text-gray-dark pl-2 py-6"
                    style={{ margin: "auto 0 " }}
                  >
                    Chat Away!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ChatWindow;
