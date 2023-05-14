import "@/styles/globals.scss";

import { Navbar } from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";

const lato = Inter({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${lato.className} bg-zinc-900`}>
      <Navbar />
      <Component {...pageProps} />

      <Footer />
    </div>
  );
}
