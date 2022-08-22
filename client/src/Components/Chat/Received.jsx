import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../utils/apiClientService';
import { getTime } from './services'

function Received({ sender_id, content, timestamp }) {

  const time = getTime(timestamp);
  const [contact, setContact] = useState();

  useEffect(() => {
    const iffy = async () => {
      if (sender_id) {   
        const data = await getUserInfo(sender_id); // get the user object
        setContact(data.data); //set the user object
      }
    };

    iffy();
  }, [sender_id]);


  return (
    <div>
                <div className="flex items-center p-[1rem]">
                <img
                  src={contact ? (contact.img_url ? contact.img_url : "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1661089877/pngwing.com_koueol.png") : undefined}
                  className="rounded-full shadow-xl"
                  width="40"
                  height="40"
                  alt="propic"
                />
                <span
                  className="flex ml-1  h-auto bg-white border-2 border-gray-xlight text-black font-normal rounded-md px-3 p-4 items-end"
                  style={{ fontSize: "1rem" }}
                >
                  {content}{" "}
                  <span
                    className="text-gray pl-3"
                    style={{ fontSize: "1rem" }}
                  >
                    {time}
                  </span>
                </span>
              </div>

    </div>
  )
}

export default Received