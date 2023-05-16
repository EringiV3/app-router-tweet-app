import { ClerkProvider } from '@/libs/auth'
import './global.css'

export const metadata = {
  title: 'App Router Tweet App',
  description: 'Next.jsのApp Routerを使ったTwiiter風のサンプルアプリです。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
