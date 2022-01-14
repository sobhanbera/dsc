import Aos from 'aos'
import {useCallback, useEffect, useRef, useState} from 'react'
import {BsArrowDownLeft} from 'react-icons/bs'
import {IoPlay} from 'react-icons/io5'
import Link from 'next/link'

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
                                    <Link href={'/ourteam'}>
                                        <a>Our Team</a>
                                    </Link>
                                </button>
                                <button>
                                    <Link href={'/events'}>
                                        <a>Events</a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.codingCardArea}>
                        <CodingCard />
                    </div>
                </div>

                {/* the scroll down area */}
                <div className={styles.landingPageHeaderBottom}>
                    <BsArrowDownLeft onClick={scrollDown} />
                </div>
            </div>

            {/* scroll helper */}
            <div ref={scrollRef}></div>

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
    const consoleLogsColor = ['#8f8f8f', '#afafaf', '#bfbfbf', '#606060', '#7f7f7f']
    const width = ['30px', '45px', '60px', '75px']
    const fileNames = ['HelloWorld', 'Graph', 'DP', 'Tree', 'BST', 'MergeSort', 'BubbleSort', 'QuickSort', 'Algo', 'Heap', 'Arrays', 'BTC']
    const [changed, setChange] = useState(true)

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min

    const changeChanged = useCallback(() => {
        setChange(value => !value)

        // colors.slice()
        // fileNames.slice()
    }, [])

    return (
        <div className={styles.codingCard}>
            <div className={styles.codingCardHeader}>
                <h2>{fileNames[Math.floor(Math.random() * fileNames.length)]}</h2>
                <button onClick={changeChanged}>
                    <IoPlay />
                </button>
            </div>

            <div className={styles.codingCardMain}>
                <div className={styles.codingCardMainEditor}>
                    {Array(random(5, 7))
                        .fill(0)
                        .map(codeLine => {
                            return (
                                <div className={styles.codingLine} key={codeLine}>
                                    {Array(random(3, 5))
                                        .fill(0)
                                        .map(code => {
                                            return (
                                                <div
                                                    key={code}
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
                </div>

                <div className={styles.codeLog}>
                    <div className={styles.codeOutput}>Console</div>

                    {Array(random(2, 3))
                        .fill(0)
                        .map(codeLine => {
                            return (
                                <div
                                    key={codeLine}
                                    className={styles.codingLine}
                                    style={{
                                        backgroundColor: 'transparent',
                                    }}>
                                    {Array(random(2, 4))
                                        .fill(0)
                                        .map(code => {
                                            return (
                                                <div
                                                    key={code}
                                                    className={styles.code}
                                                    style={{
                                                        backgroundColor: consoleLogsColor[Math.floor(Math.random() * consoleLogsColor.length)],
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
