import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { AsciiArt as Ascii, Header, Footer } from '../components'
import { HEADER_HEIGHT } from '../constants'
import '../styles/globals.css'

import { ThemeProvider, useTheme } from '../context'

export default function MyApp({ Component, pageProps }) {
    const [ref, inView] = useInView() // is the website is scroll a bit or not, initial value falsy

    return (
        <ThemeProvider>
            <Ascii>
                <Header headerFocused={inView} />

                {/* bare div just to say that user have scrolled or not */}
                <div
                    ref={ref}
                    style={{
                        height: `${HEADER_HEIGHT}px`,
                    }}></div>

                <Component {...pageProps} />

                <Footer />
            </Ascii>
        </ThemeProvider>
    )
}
