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
    title: 'Solaz club',
    description:
      'Estanislao Olmedo, diseñador y desarrollador web creativo con experiencia en la creación de sitios web a medida y soluciones digitales excepcionales.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/portfolio-7aed7.appspot.com/o/foto_perfil.png?alt=media&token=fac9df64-e8cd-46b5-9f32-27e739c55949&_gl=1*1aplot9*_ga*MzE4Mzk4MTgzLjE2OTY5NTgyNDc.*_ga_CW55HF8NVT*MTY5ODA2Njk4Mi42LjEuMTY5ODA2NzA3Ni41OC4wLjA.',
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
