import "./globals.css";
import Head from "next/head";
import ProviderWrapper from "./providers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Archana Gallary",
  description: "Artwork by Archana Gallary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100..900&family=Manrope:wght@200..800&family=MuseoModerno:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={`antialiased`}>
        <ProviderWrapper>
          <Navbar />
          <div className="px-3 lg:px-20 py-14">{children}</div>
          <div className="border-t-2 border-[#1010101A] mx-3 lg:mx-20 pt-5">
            <Footer />
          </div>
        </ProviderWrapper>
      </body>
    </html>
  );
}
