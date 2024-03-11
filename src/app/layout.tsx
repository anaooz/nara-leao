import "@/app/ui/global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import HeaderNav from "./ui/headernav"
import FooterNav from "./ui/footernav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Nara Leão",
    default: "Nara Leão",
  },
  description: "Site dedicado à cantora Nara Leão",
  authors: { name: "Mateus", url: "https://github.com/anaooz" }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} antialiased`} >
        <HeaderNav/>
          {children}
        <FooterNav/>
      </body>
    </html>
  );
}
