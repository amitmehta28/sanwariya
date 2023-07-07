import Footer from '@/components/header-footer/footer'
import Header from '@/components/header-footer/header'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )

}
