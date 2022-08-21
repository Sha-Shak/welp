import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChatRoom, getUserInfo } from "../../utils/apiClientService";

function ChatWindowNav() {
  const currentRoomId = useSelector((state) => state.currentChat);
  console.log(currentRoomId);
  const [contact, setContact] = useState();
  console.log(currentRoomId);

  useEffect(() => {
    const iffy = async () => {
      if (currentRoomId !== 0) {
        const room = await getChatRoom(currentRoomId); //get the room object
        console.log(room.data);
        const currentUser = JSON.parse(localStorage.getItem("data")); //get the current user
        const otherUserId =
          room.data.user_id1 === currentUser.id
            ? room.data.user_id2
            : room.data.user_id1; //differentiate the current user from the other user
        console.log(otherUserId);
        const data = await getUserInfo(otherUserId); // get the user object
        setContact(data.data); //set the user object
      }
    };

    iffy();
  }, [currentRoomId]);

  return (
    <div>
      <nav className="h-20 bg-white border-b-2 border-gray-xlight rounded-tr rounded-tl flex justify-between items-center">
        <div className="flex justify-center items-center">
          <i className="mdi mdi-arrow-left font-normal text-gray-light ml-1"></i>
          <img
            src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
            className="rounded-full ml-1"
            width="70"
            height="70"
            alt="propic"
          />

          <span className="text-xl font-medium text-black ml-3">
            {contact ? contact.firstname + " " + contact.lastname : null}
          </span>
          {contact ? (
            contact.type === "admin" ? (
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                Admin
              </span>
            ) : null
          ) : null}
        </div>

        <div className="flex items-center">
          <i className="mdi mdi-video text-gray-light mr-4"></i>
          <i className="mdi mdi-phone text-gray-light mr-2"></i>
          <i className="mdi mdi-dots-vertical text-gray-light mr-2"></i>
        </div>
        <Link to={`/video/${currentRoomId}`} target="_blank">
          <button>Video</button>
        </Link>
      </nav>
    </div>
  );
}

export default ChatWindowNav;
