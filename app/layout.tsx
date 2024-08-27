import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import ReactQueryProviders from '@/providers/react-query-provider';
import { Toaster } from 'sonner';
// import localFont from 'next/font/local';

// const pretendard = localFont({
//   src: '../static/fonts/PretendardVariable.woff2',
//   display: 'swap',
//   weight: '45 920',
// });

// const mapobackpacking = localFont({
//   src: '../static/fonts/MapoBackpacking.woff2',
//   display: 'swap',
//   weight: '45 920',
// });

// const onglip_unz = localFont({
//   src: '../static/fonts/onglip_unz.woff2',
//   display: 'swap',
//   weight: '45 920',
// });

export const metadata: Metadata = {
  title: 'Moment',
  description: '연인의 순간을 공유하다',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      //  className={`${onglip_unz.className}`}
      >
        <div className="max-w-xl mx-auto my-0">
          <ReactQueryProviders>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Toaster position="bottom-center" />
              {children}
            </ThemeProvider>
          </ReactQueryProviders>
        </div>
      </body>
    </html>
  );
}
