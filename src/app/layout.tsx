import './globals.css'
import type { Metadata } from 'next'

import { Roboto } from 'next/font/google'

const font = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estani Olmedo',
  description: 'My Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={font.className}>
        {children}
      </body>
    </html>
  )
}
