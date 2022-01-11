import React, {useEffect, useState} from 'react'

import styles from '../../styles/components/Loading/index.module.css'

export default function Loading() {
    const [slowConnection, setSlowConnection] = useState(false) // internet is not slow initially...

    useEffect(() => {
        const slowConnectionTimeout = setTimeout(() => {
            setSlowConnection(true)
        }, 5000)

        return () => {
            clearTimeout(slowConnectionTimeout)
        }
    }, [])

    return (
        <div className={styles.loadingContainer}>
            <div className={styles.loadingWrapper}>
                <div className={`${styles.ball} ${styles.blue}`}></div>
                <div className={`${styles.ball} ${styles.red}`}></div>
                <div className={`${styles.ball} ${styles.green}`}></div>
                <div className={`${styles.ball} ${styles.yellow}`}></div>
            </div>

            {slowConnection ? <p>Internet is not stable... still we are trying to fetch data...</p> : null}
        </div>
    )
}
