import {useEffect, useState} from 'react'
import Head from 'next/head'
import {useInView} from 'react-intersection-observer'
import {useRouter} from 'next/router'
import {getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence} from 'firebase/auth'

import {FirebaseApp} from '../firebase'

import {AsciiArt as Ascii, Header, Footer, TextInput, SmallLoading} from '../components'
import {HEADER_HEIGHT} from '../constants'
import '../styles/globals.css'
import styles from '../styles/global/index.module.css'

import {ThemeProvider, useTheme} from '../context'

export default function MyApp({Component, pageProps}) {
    const [ref, inView] = useInView() // is the website is scroll a bit or not, initial value falsy
    const router = useRouter()

    // toggle secret feature to show or not...
    const [showSecretFeature, setShowSecretFeature] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false) // loading controller

    const [isEmptyPage, setIsEmptyPage] = useState(false) // if the page is empty, then show the secret feature

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

    useEffect(() => {
        const pathsForEmptyPage = ['/other/eventvideo', '/other']
        if (pathsForEmptyPage.includes(router.pathname)) setIsEmptyPage(true)
    }, [router.pathname])

    return (
        <ThemeProvider>
            <Ascii>
                <Head>
                    <title>Google Developer Student Clubs GHRCE</title>
                    <meta name="description" content="DSC GHRCE (Google Developer Student Clubs GHRCE) is a Google program for institute/university students, with an proper aim to help students improve their skills/talents." />

                    <meta charset="utf-8" />
                    <meta name="theme-color" content="#FFFFFF" />
                    <meta httpEquiv="content-language" content="en" />

                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <meta name="keywords" content="dsc-ghrce, dsc, ghrce, google developer student club ghrce, gdsc, gdsc-ghrce" />

                    <meta name="page-type" content="Community Website" />
                    <meta name="page-topic" content="Detail about DSC-GHRCE" />
                </Head>

                {isEmptyPage ? (
                    <div>
                        <Component {...pageProps} />
                    </div>
                ) : (
                    <div>
                        {/* bare div just to say that user have scrolled or not */}
                        <Header headerFocused={inView} />

                        <div
                            ref={ref}
                            style={{
                                height: `${HEADER_HEIGHT}px`,
                            }}
                        ></div>

                        <div className={'main-content'}>
                            <Component {...pageProps} />
                        </div>

                        <Footer triggerSecret={() => setShowSecretFeature(true)} />

                        <div className={`${styles.secretFeature} ${showSecretFeature ? styles.active : styles.inactive}`} onClick={() => setShowSecretFeature(false)}>
                            <div className={styles.secretFeatureCard} onClick={e => e.stopPropagation()}>
                                <form onSubmit={e => signIN(e)} onClick={e => e.stopPropagation()}>
                                    <TextInput onClick={e => e.stopPropagation()} searchText={username} setSearch={setUsername} placeholder={'Ohh! you have found a hidden feature... Congrats!'} />
                                    <TextInput onClick={e => e.stopPropagation()} searchText={password} setSearch={setPassword} placeholder={'Nothing to do here. Thanks for visiting :)'} disabled={username.charAt(0).toLowerCase() !== 's'} />
                                    <button></button>

                                    {loading ? <SmallLoading /> : null}
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Ascii>
        </ThemeProvider>
    )
}
