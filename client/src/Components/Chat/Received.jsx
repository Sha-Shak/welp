import React from 'react'

function Received({content}) {
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
                  className="flex ml-1  h-auto bg-gray-900 text-gray-200 font-normal rounded-sm px-3 p-4 items-end"
                  style={{ fontSize: "1rem" }}
                >
                  {content}{" "}
                  <span
                    className="text-gray-400 pl-3"
                    style={{ fontSize: "1rem" }}
                  >
                    01:25am
                  </span>
                </span>
              </div>

    </div>
  )
}

export default Received