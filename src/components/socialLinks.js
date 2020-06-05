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
              src="https://image.flaticon.com/icons/svg/3011/3011178.svg"
              alt=""
              width="30"
            />
          </a>
        </div>

        <div className="circle-cont">
          <a href="https://github.com/MovingMelody">
            <img
              src="https://image.flaticon.com/icons/svg/889/889111.svg"
              alt=""
              width="30"
            />
          </a>
        </div>
        <div className="circle-cont">
          <a href="https://twitter.com/MovingMelody">
            <img
              src="https://image.flaticon.com/icons/svg/733/733579.svg"
              alt=""
              width="30"
            />
          </a>
        </div>
        <div className="circle-cont">
          <a href="https://instagram.com/sumanth.zero7">
            <img
              src="https://image.flaticon.com/icons/svg/1384/1384063.svg"
              alt=""
              width="30"
            />
          </a>
        </div>
      </div>
    </div>
  )
}
