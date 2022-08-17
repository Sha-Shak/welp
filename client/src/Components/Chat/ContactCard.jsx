import React from 'react'

function ContactCard() {
  return (
    <div>   <div className="flex w-full p-[1rem]">
    <span className="w-full flex ml-1 items-center  h-auto bg-gray-900 text-gray-200 text-xs font-normal rounded-sm px-3 p-4 ">
      <img
        src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1660568784/WhatsApp_Image_2022-08-15_at_7.01.32_PM_byfnbw.jpg"
        className="rounded-full shadow-xl"
        width="60"
        height="60"
        alt="propic"
      />
      <div className="">
        <div className="px-3 text-xl">John Doe</div>

        <div
          className="text-gray-400 px-3"
          style={{ fontSize: "16px" }}
        >
          01:25am
        </div>
      </div>
    </span>
  </div></div>
  )
}

export default ContactCard