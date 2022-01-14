import {useEffect, useState} from 'react'
import Head from 'next/head'

import {GOOGLE_COLORS} from '../constants'

import Main from '../components/Main/main'
import {useTheme} from '../context'

export default function LandingPage() {
    const {theme} = useTheme()
    const [backgroundColor, setBackgroundColor] = useState('#ffffff')

    const LightModeColors = ['#FFFFFF', GOOGLE_COLORS.BLUE, GOOGLE_COLORS.RED, GOOGLE_COLORS.GREEN, GOOGLE_COLORS.YELLOW]

    useEffect(() => {
        window.addEventListener('scroll', () => {
            const {scrollY} = window
            if (scrollY > 0 && scrollY < 160) {
                setBackgroundColor(LightModeColors[0])
            } else if (scrollY > 160 && scrollY < 800) {
                setBackgroundColor(LightModeColors[1] + '50')
            } else if (scrollY > 800 && scrollY < 1400) {
                setBackgroundColor(LightModeColors[2] + '50')
            } else if (scrollY > 1400 && scrollY < 2100) {
                setBackgroundColor(LightModeColors[3] + '50')
            } else if (scrollY > 2100 && scrollY < 2800) {
                setBackgroundColor(LightModeColors[4] + '50')
            } else if (scrollY > 2800) {
                setBackgroundColor(LightModeColors[0])
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
                backgroundColor: theme ? backgroundColor : '#151515', // since only to change color on light mode
                transition: 'background 1s',
            }}>
            <Head>
                <title>Google Developer Student Clubs GHRCE</title>
            </Head>

            <Main />
        </div>
    )
}
