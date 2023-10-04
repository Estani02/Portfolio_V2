import type { SVGProps } from 'react'

import * as React from 'react'
function GmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg height={100} viewBox="0 0 48 48" width={100} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="m45 16.2-5 2.75-5 4.75V40h7a3 3 0 0 0 3-3V16.2z" fill="#4caf50" />
      <path d="m3 16.2 3.614 1.71L13 23.7V40H6a3 3 0 0 1-3-3V16.2z" fill="#1e88e5" />
      <path d="m35 11.2-11 8.25-11-8.25-1 5.8 1 6.7 11 8.25 11-8.25 1-6.7z" fill="#e53935" />
      <path d="M3 12.298V16.2l10 7.5V11.2L9.876 8.859A4.298 4.298 0 0 0 3 12.298z" fill="#c62828" />
      <path
        d="M45 12.298V16.2l-10 7.5V11.2l3.124-2.341A4.298 4.298 0 0 1 45 12.298z"
        fill="#fbc02d"
      />
    </svg>
  )
}

export default GmailIcon
