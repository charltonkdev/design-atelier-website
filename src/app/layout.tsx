import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const poppins = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900",],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Design Atelier",
  description: "Agency Website Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
