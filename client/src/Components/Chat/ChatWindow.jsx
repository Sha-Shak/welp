import React from "react";
import Call from "./Call";
import './chat.css'
import ChatInput from "./ChatInput";
import ChatWindowNav from "./ChatWindowNav";
import Received from "./Received";
import Sent from "./Sent";
import {useSelector} from 'react-redux';

function ChatWindow() {

  const msgs = useSelector((state)=>state.messages);
  const user = 1 // get current User

  return (
    <div className="relative h-90vh mr-6 w-2/3">
   
        <div className="w-100 h-90vh flex items-center">
          <div className="h-90vh w-full bg-white rounded shadow-2xl">
           
              <ChatWindowNav/>
                <div
                  className="overflow-auto px-1 py-1"
                  style={{ height: "67vh" }}
                  id="journal-scroll"
                >
                  {msgs.map((msg)=>(
                    <>
                    { msg.sender_id === user && <Sent content={msg.content} /> }
                    { msg.sender_id !== user && <Received content={msg.content}/> }
                    
                    {/* <Call/> */}
                    </>
                  ))
                    
                    
                  
                  }

              

              
            </div>

          <ChatInput/>
            </div>
          
        </div>
    
    </div>
  );
}

export default ChatWindow;
