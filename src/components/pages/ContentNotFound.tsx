import React from 'react'
import ContentNotfound from "../../assets/images/ContentNotfound.png";

export const ContentNotFound = () => {
  return (

    <div className="w-full text-center ">
      <img src={ContentNotfound} alt="login" className="mx-auto" />

      <div
        className="w-full text-center"
        style={{
          color: "rgba(94, 88, 115, 1)",
          fontStyle: "normal",
          fontWeight: 600,
          fontSize: "24px",
        }}
      >
        Requested Resource is not Available
      </div>
    </div>
  )
}
