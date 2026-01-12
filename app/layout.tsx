import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Syne } from 'next/font/google'
import '../src/index.css'

const inter = Inter({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800'],
    variable: '--font-inter',
    display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-space-grotesk',
    display: 'swap',
})

const syne = Syne({
    subsets: ['latin'],
    weight: ['700', '800'],
    variable: '--font-syne',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Kasun Chamika De Mel',
    description: 'Professional portfolio showcasing my work as a developer',
    keywords: ['portfolio', 'developer', 'web development', 'software engineer'],
    authors: [{ name: 'Kasun Chamika De Mel' }],
    icons: {
        icon: '/images/logo.png',
    },
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
    },
}

export const viewport = {
    width: 'device-width',
    initialScale: 1.0,
    maximumScale: 5.0,
    userScalable: true,
    themeColor: '#89a67f',
}


export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${syne.variable}`} suppressHydrationWarning>
            <body className={inter.className} suppressHydrationWarning>{children}</body>
        </html>
    )
}
