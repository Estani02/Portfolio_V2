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
  description:
    'Estanislao Olmedo, diseñador y desarrollador web creativo con experiencia en la creación de sitios web a medida y soluciones digitales excepcionales. Explora mi portfolio para ver ejemplos de diseños innovadores y funcionalidad de alto rendimiento. Colabora conmigo en tu próximo proyecto web. ¡Contáctame hoy y lleva tus ideas al siguiente nivel en línea!',
  authors: [{ name: 'Estanislao Olmedo', url: 'https://estaniolmedo.vercel.app/' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Estanislao Olmedo',
    description:
      'Diseñador y desarrollador web creativo con experiencia en la creación de sitios web a medida y soluciones digitales excepcionales.',
    images: [
      {
        url: 'https://user-images.githubusercontent.com/74038190/212259468-9e0679b0-d909-41f0-9ed2-80ca3d51ce90.png',
      },
    ],
    url: 'https://estaniolmedo.vercel.app/',
    type: 'website',
  },
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
      <body suppressHydrationWarning className={`${font.className} text-white dark:bg-black`}>
        <Providers>
          <Background />
          {children}
        </Providers>
      </body>
    </html>
  )
}
