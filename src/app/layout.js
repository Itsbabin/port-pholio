import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'portpholio website',
  description: 'genarate and created by Biswajit Mandal',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
