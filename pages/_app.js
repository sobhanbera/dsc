import {useState} from 'react'
import {useInView} from 'react-intersection-observer'
import {FirebaseApp} from '../firebase'
import {getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence} from 'firebase/auth'

import {AsciiArt as Ascii, Header, Footer, TextInput, SmallLoading} from '../components'
import {HEADER_HEIGHT} from '../constants'
import '../styles/globals.css'
import styles from '../styles/global/index.module.css'

import {ThemeProvider, useTheme} from '../context'

export default function MyApp({Component, pageProps}) {
    const [ref, inView] = useInView() // is the website is scroll a bit or not, initial value falsy

    // toggle secret feature to show or not...
    const [showSecretFeature, setShowSecretFeature] = useState(false)
    const [username, setUsername] = useState('sobhanbera258')
    const [password, setPassword] = useState('TuPEknzhh9dA2AZZ')
    const [loading, setLoading] = useState(false) // loading controller

    const signIN = e => {
        e.preventDefault()
        setLoading(true)

        const firebaseAuth = getAuth()
        setPersistence(firebaseAuth, browserSessionPersistence)
            .then(res => {
                signInWithEmailAndPassword(firebaseAuth, `${username}@gmail.com`, password)
                    .then(userCredential => {
                        window.open(`/admin/links/edit?uid=${userCredential.user.uid}&user=${userCredential.user.email}&verified=${userCredential.user.emailVerified}`, '_blank')
                        setUsername('')
                        setPassword('')
                        setShowSecretFeature(false)
                        setLoading(false)
                    })
                    .catch(err => {
                        const errMsg = err.message + ''
                        if (errMsg.includes('auth/user-not-found')) console.log('%cU N F - 404', 'color: #4040Ef')
                        if (errMsg.includes('auth/wrong-password')) console.log('%cW P - X', 'color: red')
                        setLoading(false)
                    })
            })
            .catch(err => {
                // console.log('PERSISTANCE', err)
                console.log('PER')
                setLoading(false)
            })
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
                        <form onSubmit={e => signIN(e)} onClick={e => e.stopPropagation()}>
                            <TextInput onClick={e => e.stopPropagation()} searchText={username} setSearch={setUsername} placeholder={'Welcome! You have found a secret feature...'} />
                            <TextInput onClick={e => e.stopPropagation()} searchText={password} setSearch={setPassword} placeholder={'Nothing to do here. This is just for fun! :)'} disabled={username.charAt(0).toLowerCase() !== 's'} />
                            <button></button>

                            {loading ? <SmallLoading /> : null}
                        </form>
                    </div>
                </div>
            </Ascii>
        </ThemeProvider>
    )
}
