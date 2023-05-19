import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as Baijamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Baijamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-baijamjuree',
})

export const metadata = {
  title: 'SpaceTime',
  description: 'Aplicação de uma capsula do tempo construída com React, Next.Js, TailwindCss e Typescript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={` ${roboto.variable} ${baijamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
