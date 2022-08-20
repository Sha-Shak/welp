import React from 'react'

function Call() {
  return (
    <div>
      <div className="flex justify-center">
          <span
            className="text-gray text-s pt-3"
            style={{ fontSize: "1rem" }}
          >
            Call started at 02:33 am
          </span>
      </div>
      
      <div className="flex justify-center">
          <span
            className="text-gray text-s pt-3"
            style={{ fontSize: "1rem" }}
          >
            Call ended at 02:33 am
          </span>
      </div>
    </div>
  )
}

export default Call;