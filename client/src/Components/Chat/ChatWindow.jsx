import React, { useEffect, useState } from "react";
// import Call from "./Call";
import './chat.css'
import ChatInput from "./ChatInput";
import ChatWindowNav from "./ChatWindowNav";
import Received from "./Received";
import Sent from "./Sent";
import {useSelector} from 'react-redux';
import { getChatRoom, getUserInfo } from "../../utils/apiClientService";

function ChatWindow() {

  const msgs = useSelector((state)=>state.messages);
  const user = 1 // get current User

  const currentRoomId = useSelector((state)=>state.currentChat);
  const [roomExists, setRoomExists] = useState(false);
  console.log(currentRoomId)
 
   
  useEffect(() => {

      const iffy = async ()=>{

        try{
          const room = await getChatRoom(currentRoomId)
            .then(()=>setRoomExists(true))
            .catch((err)=> console.log(err))
        }
          catch(e){
            console.log(e)
          }
                  
           
      }
  
      iffy();
    },[currentRoomId]); 


  return (
    <div className="relative h-90vh mr-6 w-2/3">
   
      {  roomExists &&
      <div className="w-100 h-90vh flex items-center">
          <div className="h-90vh w-full bg-white rounded shadow-2xl">
           
              <ChatWindowNav />
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
        }
        {
          !roomExists && <>
          
          <div className="w-100 h-90vh flex items-center ">
          <div className="h-90vh w-full bg-white rounded shadow-2xl">
           
              
                <div
                  className="overflow-auto px-1 py-1 text-xl items-center"
                  style={{ height: "67vh" }}
                  id="journal-scroll"
                >
                  <div style={{margin:"auto 0 "}}>Chat Away</div>
                  

              

              
            </div>

          
            </div>
          
        </div>
          </>
        }
    
    </div>
  );
}

export default ChatWindow;
