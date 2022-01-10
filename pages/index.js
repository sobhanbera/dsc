import {useEffect, useState} from 'react'
import Head from 'next/head'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'

import {GOOGLE_COLORS} from '../constants'

function Button({changeColor, color}) {
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) changeColor(color)
    }, [inView])
    return (
        <button
            ref={ref}
            style={{
                margin: '40vh',
            }}>
            Change Color {color}
        </button>
    )
}

export default function LandingPage() {
    // const [backgroundColor, setBackgroundColor] = useState('#4040ef')

    function changeColor(color = '#4040EF') {
        setBackgroundColor(color)
    }

    return (
        <div
            style={{
                // backgroundColor,
                display: 'flex',
                flexDirection: 'column',
                minHeight: '400vh',
            }}>
            MAIN
            {/* <Button color={GOOGLE_COLORS.RED + ''} changeColor={changeColor} />
            <Button color={GOOGLE_COLORS.BLUE + ''} changeColor={changeColor} />
            <Button color={GOOGLE_COLORS.GREEN + ''} changeColor={changeColor} />
            <Button color={GOOGLE_COLORS.YELLOW + ''} changeColor={changeColor} /> */}
        </div>
    )
}
