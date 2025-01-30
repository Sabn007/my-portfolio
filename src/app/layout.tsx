import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sabin Maharjan - Frontend Developer",
  description:
    "Portfolio website of Sabin Maharjan, a Frontend Developer specializing in React and modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen">
          <BackgroundAnimation />
          <Header />
          <SocialLinks />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
