import Aside from "@/components/Aside/Aside";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Nav/Navbar";
import { DataProvider } from "@/components/Context/Context";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Home</title>
      <body className={inter.className}>
        <DataProvider>
          <div className="navbarMain">
            <Aside />
            <div className="sectionLayout">
              <Navbar />
              {children}
            </div>
          </div>
        </DataProvider>
      </body>
    </html>
  );
}
