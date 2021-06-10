import React from "react"

export default function socialLinks() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        maxWidth: 0,
        margin: "6px auto",
      }}
    >
      <div className="social-cont">
        <div className="circle-cont">
          <a href="mailto:saisumanth2303gmail.com">
            <img
              // src="https://image.flaticon.com/icons/svg/3011/3011178.svg"
              src="https://img.icons8.com/material-two-tone/24/000000/mail.png"
            src="https://img.icons8.com/material-rounded/48/000000/mail.png"
              alt=""
              width="30"
            />
          </a>
        </div>

        <div className="circle-cont">
          <a href="https://github.com/MovingMelody">
            <img
             src="https://img.icons8.com/ios-filled/50/000000/github.png"
              alt=""
              width="50"
            />
          </a>
        </div>
        <div className="circle-cont">
          <a href="https://twitter.com/MovingMelody">
            <img
              // src="https://image.flaticon.com/icons/svg/733/733579.svg"
              src="https://img.icons8.com/metro/26/000000/twitter.png"
              alt=""
              width="40"
            />
          </a>
        </div>
        <div className="circle-cont">
          <a href="https://instagram.com/sumanth.zero7">
            <img
             src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png"
              alt=""
              width="30"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
