import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {getUserInfo} from '../../utils/apiClientService'

function ContactCard({room}) {

  const currentUser = JSON.parse(localStorage.getItem("data"));
  const otherUserId = room.user_id1 === currentUser.id ? room.user_id2 : room.user_id1;

  const [contact, setContact] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    const iffy = async ()=>{
      const data = await getUserInfo(otherUserId); 
     
      setContact(data.data);
    }

    iffy();
  }, [otherUserId]);

  const handleClick = () => {
    dispatch({
      type : "SET_CHAT",
      payload : room.id
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
     
        <div className="px-3 text-xl">{contact ? contact.firstname : 'Loading...'}</div>

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