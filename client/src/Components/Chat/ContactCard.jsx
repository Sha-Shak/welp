import React from 'react'
import { findContactName } from './services';
import { useDispatch } from 'react-redux';

function ContactCard({room}) {

  const currentUser = 1;
  const contact = findContactName(room,currentUser)[0];
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch({
      type : "SET_CHAT",
      payload : room.chat_id
    })
  }
  return (
    <div onClick={handleClick} >  
       <div className="flex w-full p-[1rem]">
        <span className="w-full flex ml-1 items-center  h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-3 p-4 ">
        <img
            src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
            className="rounded-full shadow-xl"
            width="60"
            height="60"
            alt="propic"
          />
      <div className="">
     
        <div className="px-3 text-xl">{contact.name}</div>

        {/* <div
          className="text-gray-400 px-3"
          style={{ fontSize: "16px" }}
        >
         Last Message
        </div> */}
      </div>
    </span>
  </div></div>
  )
}

export default ContactCard