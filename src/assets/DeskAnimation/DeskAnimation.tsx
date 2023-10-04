import * as React from 'react'

import s from '@/assets/DeskAnimation/DeskAnimation.module.css'

function DeskAnimation() {
  return (
    <svg
      className={s.svg_cont}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="study">
        <rect height="64" width="64" />
        <g className={s.smoke}>
          <path
            className={s.smoke_2}
            d="M9 21L9.55279 19.8944C9.83431 19.3314 9.83431 18.6686 9.55279 18.1056L9 17L8.44721 15.8944C8.16569 15.3314 8.16569 14.6686 8.44721 14.1056L9 13"
            stroke="#797270"
          />
          <path
            className={s.smoke_1}
            d="M6.5 22L7.05279 20.8944C7.33431 20.3314 7.33431 19.6686 7.05279 19.1056L6.5 18L5.94721 16.8944C5.66569 16.3314 5.66569 15.6686 5.94721 15.1056L6.5 14"
            stroke="#797270"
          />
        </g>
        <g id="laptop">
          <rect
            fill="#F3F3F3"
            height="3"
            id="laptop-base"
            stroke="#453F3C"
            strokeWidth="2"
            width="20"
            x="17"
            y="28"
          />
          <rect
            fill="#5A524E"
            height="11"
            id="laptop-screen"
            stroke="#453F3C"
            strokeWidth="2"
            width="18"
            x="18"
            y="17"
          />
          <rect className={s.line_1} fill="#F78764" height="1" width="14" x="20" y="19" />
          <rect className={s.line_2} fill="#F9AB82" height="1" width="14" x="20" y="21" />
          <rect className={s.line_3} fill="#F78764" height="1" width="14" x="20" y="23" />
          <rect className={s.line_4} fill="#F9AB82" height="1" width="14" x="20" y="25" />
        </g>
        <g id="cup">
          <rect
            fill="#CCC4C4"
            height="7"
            id="Rectangle 978"
            stroke="#453F3C"
            strokeWidth="2"
            width="5"
            x="5"
            y="24"
          />
          <path
            d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24"
            id="Ellipse 416"
            stroke="#453F3C"
            strokeWidth="2"
          />
          <rect fill="#D6D2D1" height="1" id="Rectangle 996" width="3" x="6" y="25" />
        </g>
        <g id="books">
          <rect
            fill="#B16B4F"
            height="14"
            id="Rectangle 984"
            stroke="#453F3C"
            strokeWidth="2"
            transform="rotate(90 58 27)"
            width="4"
            x="58"
            y="27"
          />
          <rect
            fill="#797270"
            height="14"
            id="Rectangle 985"
            stroke="#453F3C"
            strokeWidth="2"
            transform="rotate(90 56 23)"
            width="4"
            x="56"
            y="23"
          />
          <rect
            fill="#F78764"
            height="14"
            id="Rectangle 986"
            stroke="#453F3C"
            strokeWidth="2"
            transform="rotate(90 60 19)"
            width="4"
            x="60"
            y="19"
          />
          <rect fill="#F9AB82" height="1" id="Rectangle 993" width="12" x="47" y="20" />
          <rect fill="#54504E" height="1" id="Rectangle 994" width="12" x="43" y="24" />
          <rect fill="#804D39" height="1" id="Rectangle 995" width="12" x="45" y="28" />
        </g>
        <g id="desk">
          <rect
            fill="#797270"
            height="5"
            id="Rectangle 973"
            stroke="#453F3C"
            strokeWidth="2"
            width="56"
            x="4"
            y="31"
          />
          <rect
            fill="#797270"
            height="6"
            id="Rectangle 987"
            stroke="#453F3C"
            strokeWidth="2"
            width="30"
            x="10"
            y="36"
          />
          <rect
            fill="#797270"
            height="24"
            id="Rectangle 975"
            stroke="#453F3C"
            strokeWidth="2"
            width="4"
            x="6"
            y="36"
          />
          <rect
            fill="#797270"
            height="24"
            id="Rectangle 974"
            stroke="#453F3C"
            strokeWidth="2"
            width="18"
            x="40"
            y="36"
          />
          <line id="Line 129" stroke="#453F3C" strokeWidth="2" x1="40" x2="58" y1="48" y2="48" />
          <line id="Line 130" stroke="#453F3C" strokeWidth="2" x1="22" x2="28" y1="39" y2="39" />
          <line id="Line 142" stroke="#453F3C" strokeWidth="2" x1="46" x2="52" y1="42" y2="42" />
          <line id="Line 131" stroke="#453F3C" strokeWidth="2" x1="46" x2="52" y1="54" y2="54" />
          <rect fill="#54504E" height="1" id="Rectangle 988" width="28" x="11" y="37" />
          <rect fill="#9E9492" height="1" id="Rectangle 992" width="54" x="5" y="32" />
          <rect fill="#54504E" height="1" id="Rectangle 989" width="2" x="7" y="37" />
          <rect fill="#54504E" height="1" id="Rectangle 990" width="16" x="41" y="37" />
          <rect fill="#54504E" height="1" id="Rectangle 991" width="16" x="41" y="49" />
          <line id="Line 143" stroke="#453F3C" strokeWidth="2" x2="64" y1="60" y2="60" />
        </g>
      </g>
    </svg>
  )
}

export default DeskAnimation
