import type { SVGProps } from 'react'

import * as React from 'react'
function GitIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#FFFFFF9C"
      stroke="#ffffff00"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>git</title>
      <path d="M30.428 14.663 17.333 1.569c-.35-.349-.833-.565-1.367-.565s-1.017.216-1.367.565l-2.713 2.718 3.449 3.449a2.296 2.296 0 0 1 2.903 2.942l.005-.016 3.322 3.324a2.296 2.296 0 1 1-1.374 1.288l-.006.015-3.11-3.094v8.154a2.3 2.3 0 1 1-2.65.438c.211-.211.462-.382.741-.502l.015-.006v-8.234a2.305 2.305 0 0 1-1.239-3.027l-.006.015-3.389-3.405-8.98 8.974c-.348.351-.562.834-.562 1.368s.215 1.017.563 1.368L14.664 30.43c.349.35.832.566 1.366.566s1.016-.216 1.366-.566L30.43 17.396a1.925 1.925 0 0 0 0-2.732z" />
    </svg>
  )
}

export default GitIcon
