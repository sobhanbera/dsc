import Aos from 'aos'
import {useEffect, useRef, useState} from 'react'
import {BsArrowDownLeft} from 'react-icons/bs'
import {IoPlay} from 'react-icons/io5'

import HomeCard from '.'
import {WebsiteLogo} from '..'
import {homeCardApi} from '../../pages/api/HomeCardApi'
import styles from '../../styles/pages/main/index.module.css'

export default function Main() {
    const scrollRef = useRef()

    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    const scrollDown = () => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className={styles.landingPage}>
            <div className={styles.landingPageHeader}>
                {/* the logo and details area */}
                <div className={styles.landingPageHeaderTop}>
                    <div className={styles.logoArea}>
                        <span className={styles.logoSpan}>
                            <WebsiteLogo />
                            <p>
                                <span>Google Developer Student Clubs</span>
                                <span>GHRCE</span>
                            </p>
                        </span>

                        <div className={styles.description}>
                            <p>{'Keep exploring & Keep Learning.\nLearn new things with us everytime everyday...'}</p>

                            <div className={styles.buttons}>
                                <button>
                                    <a href={'/ourteam'}>Our Team</a>
                                </button>
                                <button>
                                    <a href={'/events'}>Events</a>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.codingCardArea}>
                        <CodingCard />
                    </div>
                </div>

                {/* the scroll down area */}
                <div className={styles.landingPageHeaderBottom} ref={scrollRef}>
                    <BsArrowDownLeft onClick={scrollDown} />
                </div>
            </div>

            <div className={styles.landingPageCards}>
                {homeCardApi.map(e => (
                    <HomeCard key={e.id} link={e.link} heading={e.heading} subcontent={e.subcontent} content={e.content} buttonTitle={e.buttonTitle} inputPlaceholder={e.inputPlaceholder}></HomeCard>
                ))}
            </div>
        </div>
    )
}
//
const CodingCard = () => {
    const colors = [
        // '#4169E1',
        // '#243079',
        '#db4437',
        '#4285f4',
        '#0f9d58',
        '#f4b400',
    ]
    const logColor = ['#8f8f8f', '#afafaf', '#bfbfbf', '#606060', '#7f7f7f']
    const width = ['30px', '45px', '52px', '60px', '75px']
    const fileNames = ['HelloWorld', 'Graph', 'DP', 'Tree', 'BST', 'MergeSort', 'BubbleSort', 'QuickSort', 'Algo', 'Heap', 'Arrays', 'BTC']
    const [changed, setChange] = useState(true)

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    const changeChanged = () => {
        setChange(value => !value)
    }

    useEffect(() => {
        colors.slice()
        fileNames.slice()
    }, [changed])

    return (
        <div className={styles.codingCard}>
            <div className={styles.codingCardHeader}>
                <h2>{fileNames[Math.floor(Math.random() * fileNames.length)]}</h2>
                <button onClick={changeChanged}>
                    <IoPlay />
                </button>
            </div>

            <div className={styles.codingCardMain}>
                <div className={styles.codingLine}>
                    <div
                        className={styles.code}
                        style={{
                            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                            width: width[Math.floor(Math.random() * width.length)],
                        }}></div>
                    <div
                        className={styles.code}
                        style={{
                            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                            width: width[Math.floor(Math.random() * width.length)],
                        }}></div>
                    <div
                        className={styles.code}
                        style={{
                            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                            width: width[Math.floor(Math.random() * width.length)],
                        }}></div>
                </div>

                {Array(random(5, 7))
                    .fill(0)
                    .map(codeLine => {
                        return (
                            <div className={styles.codingLine} key={codeLine}>
                                {Array(random(3, 5))
                                    .fill(0)
                                    .map(codeLine => {
                                        return (
                                            <div
                                                key={codeLine}
                                                className={styles.code}
                                                style={{
                                                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                                                    width: width[Math.floor(Math.random() * width.length)],
                                                }}></div>
                                        )
                                    })}
                            </div>
                        )
                    })}

                <div className={styles.codeLog}>
                    <div className={styles.codeOutput}>Console</div>

                    {Array(random(1, 2))
                        .fill(0)
                        .map(codeLine => {
                            return (
                                <div
                                    key={codeLine}
                                    className={styles.codingLine}
                                    style={{
                                        backgroundColor: 'transparent',
                                    }}>
                                    {Array(random(3, 5))
                                        .fill(0)
                                        .map(codeLine => {
                                            return (
                                                <div
                                                    key={codeLine}
                                                    className={styles.code}
                                                    style={{
                                                        backgroundColor: logColor[Math.floor(Math.random() * logColor.length)],
                                                        width: width[Math.floor(Math.random() * width.length)],
                                                    }}></div>
                                            )
                                        })}
                                </div>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}
