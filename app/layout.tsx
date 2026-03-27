import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "Scrollytelling interactive portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#121212] text-white antialiased overflow-x-hidden selection:bg-white/20 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
