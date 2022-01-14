import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'

import ErrorStyles from '../styles/components/Error/Error.module.css'

function Error() {
    const router = useRouter()
    const [time, setTime] = useState(10)

    const redirect = () => {
        router.push('/')
    }

    useEffect(() => {
        const id = setInterval(() => {
            setTime(old => old - 1)
        }, 1000)
        setTimeout(() => {
            clearTimeout(id)
            redirect()
        }, 10 ** 4)
    }, [])

    return (
        <section className={ErrorStyles.container}>
            <Head>
                <title>DSC GHRCE | 404 Page Not Found</title>
                <meta name="description" content="DSC GHRCE (Google Developer Student Clubs GHRCE) is a Google program for institute/university students, with an proper aim to help students improve their skills/talents." />
                <meta name="keywords" content="dsc-ghrce, dsc, ghrce, google developer student club ghrce, gdsc, gdsc-ghrce" />
            </Head>

            <div className={ErrorStyles.error}>
                <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
                <p>The page you are looking for might have been removed, had it’s name changed or currently unavailable.</p>
                <p className={ErrorStyles.redirect}>Redirecting to Home in {time} sec...</p>
                <button onClick={redirect}>Back to home</button>
            </div>
        </section>
    )
}

export default Error
