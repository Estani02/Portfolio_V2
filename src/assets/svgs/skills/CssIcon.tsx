import type { SVGProps } from 'react'

import * as React from 'react'
function CssIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={100}
      viewBox="0 0 256 256"
      width={100}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m42 6-3 34-14 4-14-4L8 6zM16.8 28h4l.098 2.5L25 31.898l4.102-1.398.296-4.5h-8.796l-.204-4h9.204l.296-4H16.102l-.301-4h18.3l-.5 8-.703 11.5L25 36.102 17.102 33.5z"
        fill="#fff"
        fillOpacity={0.612}
        fillRule="evenodd"
        fontFamily="none"
        fontSize="none"
        fontWeight="none"
        strokeMiterlimit={10}
        style={{
          mixBlendMode: 'normal',
        }}
        textAnchor="none"
        transform="scale(5.12)"
      />
    </svg>
  )
}

export default CssIcon
