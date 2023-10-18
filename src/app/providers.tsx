/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'

function Providers({ children }: { children: any }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

export default Providers
