import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getChatRoom, getUserInfo } from "../../utils/apiClientService";

function ChatWindowNav() {
  const currentRoomId = useSelector((state) => state.currentChat);

  const [contact, setContact] = useState();
  

  useEffect(() => {
    const iffy = async () => {
      if (currentRoomId !== 0) {
        const room = await getChatRoom(currentRoomId); //get the room object
        const currentUser = JSON.parse(localStorage.getItem("data")); //get the current user
        const otherUserId =
          room.data.user_id1 === currentUser.id
            ? room.data.user_id2
            : room.data.user_id1; //differentiate the current user from the other user
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
            src={contact ? (contact.img_url ? contact.img_url : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1661089877/pngwing.com_koueol.png") : undefined}
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
              <span class="bg-indigo/50 text-gray-dark text-xs font-semibold mr-2 ml-3 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
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
