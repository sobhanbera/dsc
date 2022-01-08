import '../styles/globals.css'
import {AsciiArt, Header, Footer} from '../components'

export default function MyApp({Component, pageProps}) {
    return (
        <AsciiArt>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AsciiArt>
    )
}
