import './globals.css'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import { Alice } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Alice({
  subsets: ['latin'],
  weight: '400'
})

export const metadata: Metadata = {
  title: '3D Interactive Yatch',
  description: '',
  creator: ''
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
