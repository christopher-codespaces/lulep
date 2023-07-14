import '@/styles/globals.css';
import {NavBar,Footer,Alert} from '@/components'


export default function App({ Component, pageProps }) {
  return (
    <>
        <Alert/>
        <NavBar/>
        <Component {...pageProps} />
        <Footer/>
    </>
  )
}
