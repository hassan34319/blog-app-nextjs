import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "./(components)/ui/Navbar";
import Footer from "./(components)/ui/Footer";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Blog AI",
  description: "Blogs for you, By you. Powered by GPT-4",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={openSans.className} lang="en">
      <body className="bg-bl-primary text-wh-50">
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
