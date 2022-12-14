import React from "react";
import './chat.css'
import ChatSearch from "./ChatSearch";
import ContactCard from "./ContactCard";
import { useSelector } from "react-redux";

function Chats() {

  const currentUsersChats = useSelector((state)=> state.currentUsersChats);

  return (
    <div className=" h-90vh ml-6 mr-3 w-1/3">
      <div className=" h-90vh w-full flex items-center h-100">
        <div className="h-90vh border-2 border-gray-xlight h-90vh w-full h-100 bg-white rounded shadow-2xl">
          <ChatSearch/>

          <div
            className="overflow-auto px-1 py-1"
            style={{height:"78vh"}}
            id="journal-scroll"
          >
            {currentUsersChats && currentUsersChats.map((room, key)=>(
                <ContactCard room = {room} key={key} />
            )
            
            )}
         
          </div>

     
        </div>
      </div>
    </div>
  );
}

export default Chats;
