import React from 'react'
import styles from '../../styles/components/RedirectButton/index.module.css'

export default function RedirectButton({ link, title }) {
    return (
        <button className={styles.redirectButton}>
            <a href={link} target={'_blank'}>{title}</a>
        </button>
    )
}

