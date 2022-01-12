import {useEffect, useState} from 'react'
import Head from 'next/head'
import {useInView} from 'react-intersection-observer'

import {GOOGLE_COLORS} from '../constants'
import axios from 'axios'

function ColorTrigger({changeColor, color}) {
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            console.log('Color changed to:', color)
            changeColor(color)
        }
    }, [inView])

    return (
        <div
            ref={ref}
            style={{
                height: '100vh',
            }}></div>
    )
}

export default function LandingPage() {
    const [backgroundColor, setBackgroundColor] = useState('#ffffff')

    function changeColor(color = '#ffffff') {
        // setBackgroundColor(color)
    }

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
            <p>Color is white currently... keep scrolling...</p>
            <ColorTrigger color={'#FFFFFF'} changeColor={changeColor} />

            <p>Color will change here to blue</p>
            <ColorTrigger color={GOOGLE_COLORS.BLUE + '50'} changeColor={changeColor} />

            <p>Color will change here to redish</p>
            <ColorTrigger color={GOOGLE_COLORS.RED + '50'} changeColor={changeColor} />

            <p>Color will change here to green</p>
            <ColorTrigger color={GOOGLE_COLORS.GREEN + '50'} changeColor={changeColor} />

            <p>Color will change here to yellow</p>
            <ColorTrigger color={GOOGLE_COLORS.YELLOW + '50'} changeColor={changeColor} />

            <p>Color will now change to white back.</p>
            <ColorTrigger color={'#ffffff'} changeColor={changeColor} />
        </div>
    )
}
