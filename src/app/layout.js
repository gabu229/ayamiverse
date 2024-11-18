import { Inter } from "next/font/google";
import "./globals.css";
import MainNavbar from "@/components/Navbars/MainNavbar";
import MainFooter from "@/components/Footers/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ayamiverse: Mint, Adapt, Evolve",
  description:
    "AnimeVerse: The Genesis Scrolls is a Web3 NFT experience where you create, customize, and own anime-inspired characters. Engage in quests, evolve your heroes, and be part of a story-driven fantasy world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar />

        <div className="block relative mt-28">{children}</div>

        <MainFooter />
      </body>
    </html>
  );
}
