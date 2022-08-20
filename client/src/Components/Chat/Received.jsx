import React from 'react'
import { getTime } from './services'

function Received({ content, timestamp }) {

  const time = getTime(timestamp);

  return (
    <div>
                <div className="flex items-center p-[1rem]">
                <img
                  src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
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