
import "~/styles/globals.css";

import { Inter } from "next/font/google";
import Navbar from "~/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Ragnarok Forge",
  description: "Blacksmith simulation for ragnarok online",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
