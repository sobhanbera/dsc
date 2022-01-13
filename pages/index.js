import {useEffect, useState} from 'react'
import Head from 'next/head'

import {GOOGLE_COLORS} from '../constants'

import Main from '../components/Main/main'

export default function LandingPage() {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff')

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const {scrollY} = window
            if (scrollY > 0 && scrollY < 160) {
                setBackgroundColor('#FFFFFF')
            } else if (scrollY > 160 && scrollY < 1170) {
                setBackgroundColor(GOOGLE_COLORS.BLUE + '50')
            } else if (scrollY > 1170 && scrollY < 2190) {
                setBackgroundColor(GOOGLE_COLORS.RED + '50')
            } else if (scrollY > 2190 && scrollY < 3200) {
                setBackgroundColor(GOOGLE_COLORS.GREEN + '50')
            } else if (scrollY > 3200 && scrollY < 4230) {
                setBackgroundColor(GOOGLE_COLORS.YELLOW + '50')
            } else if (scrollY > 4230) {
                setBackgroundColor('#FFFFFF')
            }
        })

        return () => {
            window.removeEventListener('scroll', null)
        }
    }, [])

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor,
                transition: 'background 1s',
            }}>
            <Head>
                <title>Google Developer Student Clubs GHRCE</title>
            </Head>

            <Main />
        </div>
    )
}
