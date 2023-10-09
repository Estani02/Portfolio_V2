import type { SVGProps } from 'react'

import * as React from 'react'
function HtmlIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      height={100}
      viewBox="0 0 256 256"
      width={100}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M45.273 2.324A.996.996 0 0 0 44.535 2H5.465a.996.996 0 0 0-.996 1.09l3.52 39.426c.034.414.324.757.722.875l16.012 4.57c.086.027.18.039.273.039a.926.926 0 0 0 .274-.04l16.023-4.57c.398-.117.684-.46.723-.874L45.53 3.09a.985.985 0 0 0-.258-.766zm-8.425 13.594H18.035l.45 5.09h17.91L35.05 36.05 24.992 39.09l-.097-.031-9.942-3.012-.543-6.129h4.871l.211 2.379 5.559 1.164 5.457-1.164.582-6.438H14.047l-1.324-14.804H37.28z"
        fill="#fff"
        fillOpacity={0.612}
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

export default HtmlIcon
