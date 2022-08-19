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
       <div className="flex w-full p-[5px]">
        <span className="border-2 border-slate-300 w-full flex ml-1 items-center  h-auto bg-white font-normal rounded-md px-3 p-4 ">
        <img
            src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
            className="rounded-full shadow-xl"
            width="100"
            height="100"
            alt="propic"
          />
      <div className="">
     
        <div className="px-3 text-black text-xl">{contact ? contact.firstname : 'Welp User'}</div>

        
      </div>
    </span>
  </div></div>
  )
}

export default ContactCard