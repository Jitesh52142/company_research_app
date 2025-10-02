import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Company Research App',
  description: 'Professional company research and analysis platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

