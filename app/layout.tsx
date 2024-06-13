import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProviders from "@/providers/react-query-provider";

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"], //문자열로 넣기
  subsets: ["latin"], // 한글인지 영문인지
});

export const metadata: Metadata = {
  title: "Moment",
  description: "연인의 순간을 공유하다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKR.className}>
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
      </body>
    </html>
  );
}
