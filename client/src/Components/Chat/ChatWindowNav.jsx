import React from 'react'
import { useSelector } from 'react-redux'
import { findContactName } from './services'

function ChatWindowNav() {
    const currentUser = 1
    const getChat = useSelector((state)=>state.currentChat)
    const contact = findContactName(getChat,currentUser)[0] 
 

   

  return (
    <div> 
        <nav className="h-20 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
            <div className="flex justify-center items-center">
            <i className="mdi mdi-arrow-left font-normal text-gray-300 ml-1"></i>
            <img
                src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
                className="rounded-full ml-1"
                width="70"
                height="70"
                alt="propic"
            />
      

            <span className="text-xl font-medium text-gray-300 ml-1">
                {contact.name}
            </span>
            </div>

            <div className="flex items-center">
                <i className="mdi mdi-video text-gray-300 mr-4"></i>
                <i className="mdi mdi-phone text-gray-300 mr-2"></i>
                <i className="mdi mdi-dots-vertical text-gray-300 mr-2"></i>
            </div>
        </nav>
  </div>
  )
}

export default ChatWindowNav