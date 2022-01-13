import React, {useEffect, useState} from 'react'

import styles from '../../styles/components/Loading/index.module.css'

export default function SmallLoading() {
    return (
        <div className={styles.loadingContainer}>
            <div className={`${styles.loadingWrapper} ${styles.small}`}>
                <div className={`${styles.ball} ${styles.blue}`}></div>
                <div className={`${styles.ball} ${styles.red}`}></div>
                <div className={`${styles.ball} ${styles.green}`}></div>
                <div className={`${styles.ball} ${styles.yellow}`}></div>
            </div>
        </div>
    )
}
