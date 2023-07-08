'use client'
import Top from '@/shared/components/Top';
import CardIm from '@/shared/components/CardIm'

import { Data } from '@/shared/utils/context/Contexto';

interface ReactNode {
  children: React.ReactNode
}
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: ReactNode) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Data>
          <Top />
          <section className="container-main">
            <CardIm />
            {children}
          </section>
        </Data>
      </body>
    </html>
  )
}