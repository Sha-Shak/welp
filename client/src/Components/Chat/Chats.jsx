import React from "react";
import './chat.css'
import ChatSearch from "./ChatSearch";
import ContactCard from "./ContactCard";

function Chats() {


  return (
    <div className="h-90vh ml-6 mr-3 w-1/3">
      <div className="h-90vh w-full flex items-center h-100">
        <div className="h-90vh w-full h-100 bg-white rounded shadow-2xl">
          <ChatSearch/>

          <div
            className="overflow-auto px-1 py-1"
            style={{ height: "70vh" }}
            id="journal-scroll"
          >
         <ContactCard/>
          </div>

     
        </div>
      </div>
    </div>
  );
}

export default Chats;
