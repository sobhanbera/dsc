import {useState} from 'react'
import {useInView} from 'react-intersection-observer'

import {AsciiArt as Ascii, Header, Footer, TextInput} from '../components'
import {HEADER_HEIGHT} from '../constants'
import '../styles/globals.css'
import styles from '../styles/global/index.module.css'

import {ThemeProvider, useTheme} from '../context'

export default function MyApp({Component, pageProps}) {
    const [ref, inView] = useInView() // is the website is scroll a bit or not, initial value falsy

    // toggle secret feature to show or not...
    const [showSecretFeature, setShowSecretFeature] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const signIN = e => {
        // e.preventDefault()
        console.log('asdf')
    }

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

                <div className={'main-content'}>
                    <Component {...pageProps} />
                </div>

                <Footer triggerSecret={() => setShowSecretFeature(true)} />

                <div className={`${styles.secretFeature} ${showSecretFeature ? styles.active : styles.inactive}`} onClick={() => setShowSecretFeature(false)}>
                    <div className={styles.secretFeatureCard} onClick={e => e.stopPropagation()}>
                        <form onSubmit={() => signIN()} onClick={e => e.stopPropagation()}>
                            <TextInput onClick={e => e.stopPropagation()} searchText={username} setSearch={setUsername} placeholder={'Welcome! You have found a secret feature...'} />
                            <TextInput onClick={e => e.stopPropagation()} searchText={password} setSearch={setPassword} placeholder={'Nothing to do here. This is just for fun! :)'} disabled={username.charAt(0).toLowerCase() !== 's'} />
                        </form>
                    </div>
                </div>
            </Ascii>
        </ThemeProvider>
    )
}
