import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chathura's Portfolio",
  description: 'Personal Portfolio of Chathura J Ekanayake - Software Engineer | Lead Web Developer',
  keywords: [
    'Chathura J Ekanayake',
    'Software Engineer',
    'Lead Web Developer',
    'Portfolio',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Full Stack Developer',
    'Web Development',
    'Sri Lanka',
    'Tech Portfolio'
  ],
  authors: [{ name: 'Chathura J Ekanayake', url: 'https://github.com/chathuraje' }],
  creator: 'Chathura J Ekanayake',
  publisher: 'Chathura J Ekanayake',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1.0',
  themeColor: '#0f172a',
  colorScheme: 'light dark',
  manifest: '/site.webmanifest',
  category: 'Technology',
  applicationName: "Chathura's Portfolio",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Chathura's Portfolio",
    description: 'Explore the projects and skills of Chathura J Ekanayake.',
    url: 'https://chathura.digitix365.com',
    siteName: "Chathura's Portfolio",
    images: [
      {
        url: '/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Chathura J Ekanayake Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Chathura's Portfolio",
    description: 'Explore the projects and skills of Chathura J Ekanayake.',
    images: ['https://chathura.digitix365.com/profile.jpeg']
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/dheereshagrwal/coloured-icons@1.9.0/src/app/ci.min.css"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
