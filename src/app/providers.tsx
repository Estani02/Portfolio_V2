/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'

function Providers({ children }: { children: any }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ThemeProvider attribute="class">{children}</ThemeProvider>
    </>
  )
}

export default Providers
