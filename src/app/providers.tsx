/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react'
import { ThemeProvider } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

function Providers({ children }: { children: any }) {
  return (
    <ThemeProvider attribute="class">
      {/* <AnimatePresence mode="wait"> */}
      {/* <motion.main
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          initial={{ opacity: 0, y: -2000 }}
          transition={{ duration: 2.5, delay: 0.5, type: 'spring' }}
        > */}
      {children}
      {/* </motion.main> */}
      {/* </AnimatePresence> */}
    </ThemeProvider>
  )
}

export default Providers
