/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

function Providers({ children }: { children: any }) {
  return (
    <ThemeProvider attribute="class">
      <I18nextProvider i18n={i18next}>{children}</I18nextProvider>
    </ThemeProvider>
  )
}

export default Providers
