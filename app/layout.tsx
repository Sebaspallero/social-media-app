import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

const poppins = Poppins({weight: ['400', '700'], subsets: ['latin'], style: ['normal']})

export const metadata = {
  title: 'Whimsy',
  description: 'Next.js 13 Social Media App',
  icons:{
    icon: '/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
