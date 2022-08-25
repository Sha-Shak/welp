import React from 'react'
import { getTime } from './services'

function Call({ message }) {

  const time = getTime(message.timestamp);

  return (
    <div>
      <div className="flex justify-center">
          <span
            className="text-gray text-s pt-3"
            style={{ fontSize: "1rem" }}
          >
            {message.content + ' - ' + time}
          </span>
      </div>
    </div>
  )
}

export default Call;