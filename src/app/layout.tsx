import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'DocumentAI - Generate Professional Documents with AI',
  description: 'Instantly create technical reports, research summaries, and marketing copy using advanced AI. Export to PDF, DOCX, and Markdown.',
  keywords: ['AI document generator', 'AI writing assistant', 'technical report AI', 'research summary AI', 'DocumentAI'],
  authors: [{ name: 'DocumentAI Team' }],
  openGraph: {
    title: 'DocumentAI - AI Document Generation',
    description: 'Transform your ideas into professional documents with AI.',
    url: 'https://documentai.studio', // Placeholder URL
    siteName: 'DocumentAI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DocumentAI - AI Document Generation',
    description: 'Transform your ideas into professional documents with AI.',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
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
