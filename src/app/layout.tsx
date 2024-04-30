import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400","500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NextJS Authentication",
  description: "A Next.js Authentication app securely manages user registration, login, and access control, ensuring seamless authentication flows in a React-based web application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="bg-green-500 min-h-screen min-w-full flex items-center justify-center px-[5%]">{children}</main>
      </body>
    </html>
  );
}
