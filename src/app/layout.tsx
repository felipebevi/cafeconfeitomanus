import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Café Confeito | Bolos Festivos Personalizados',
  description: 'Bolos festivos personalizados com opções de massa, recheio e cobertura. Encomende o bolo perfeito para sua celebração!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
