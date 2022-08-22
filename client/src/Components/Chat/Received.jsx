import React from 'react'
import { getTime } from './services'

function Received({ content, timestamp, imgSrc }) {

  const time = getTime(timestamp);
  const default_url = "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"

  return (
    <div>
                <div className="flex items-center p-[1rem]">
                  <div className='h-10 w-10 rounded-full'>
                    <img
                      src={imgSrc ? imgSrc : default_url}
                      className="rounded-full h-10 w-10 w-min-10 h-min-10"
                      alt="propic"
                    />
                  </div>
                <span
                  className="flex ml-1 h-auto bg-white border-2 border-gray-light text-black font-normal rounded-md px-3 p-4 items-end"
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