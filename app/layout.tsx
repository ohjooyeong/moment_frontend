import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import ReactQueryProviders from '@/providers/react-query-provider';
import axios from 'axios';

const pretendard = localFont({
  src: '../static/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: 'Moment',
  description: '연인의 순간을 공유하다',
};

axios.create({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pretendard.className}`}>
        <div className="max-w-xl mx-auto my-0">
          <ReactQueryProviders>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
