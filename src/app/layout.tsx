import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

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
  keywords: ['Chathura J Ekanayake', 'Software Engineer', 'Lead Web Developer', 'Portfolio', 'React', 'Next.js', 'Tailwind CSS'],
  authors: [{ name: 'Chathura J Ekanayake', url: 'https://github.com/chathuraje01' }], // Add your social/portfolio URL
  openGraph: {
    title: "Chathura's Portfolio",
    description: 'Explore the projects and skills of Chathura J Ekanayake.',
    url: 'https://chathuraje.dev', // Replace with your actual domain
    siteName: "Chathura's Chronicle",
    images: [
      {
        url: 'https://picsum.photos/1200/630', // Replace with your OG image URL
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
    // creator: '@yourtwitterhandle', // Replace with your Twitter handle if available
    images: ['https://picsum.photos/1200/630'], // Replace with your Twitter image URL
  },
  // Add more metadata as needed, like icons, manifest, etc.
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
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
