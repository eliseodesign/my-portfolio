'use client'
interface ReactNode {
  children: React.ReactNode
}
// components 
import Top from '@/shared/components/Top';
import CardIm from '@/shared/components/CardIm'
// context
import { Data } from '@/shared/utils/context/Contexto';
// fonts
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
//style
import '../style/globals.css'

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