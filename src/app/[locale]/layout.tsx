/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import '../globals.css'
import type { Metadata } from 'next'

import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Roboto } from 'next/font/google'

import Background from '@/components/background/Background'

import Providers from '../providers'

const font = Roboto({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Estani Olmedo',
  description: 'My Website',
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: any
}) {
  const locale = useLocale()

  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <Providers>
        <body suppressHydrationWarning className={`${font.className} text-white dark:bg-black`}>
          <Background />
          {children}
        </body>
      </Providers>
    </html>
  )
}
