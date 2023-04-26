import '@/styles/globals.scss'

import { Navbar } from '@/components/Navbar'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.className} bg-zinc-900`}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
