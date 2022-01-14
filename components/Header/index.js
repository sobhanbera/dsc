import {useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'

import {HamburgerIcon, WebsiteLogo, ThemeToggler} from '../index'
import styles from '../../styles/components/Header/index.module.css'
import {useTheme} from '../../context'

export default function Header({headerFocused}) {
    const router = useRouter()
    const [menuOpened, setMenuOpened] = useState(false) // if the menu is opened the value will be true else false
    const {theme, toggleTheme} = useTheme()

    useEffect(() => {
        setMenuOpened(false)
    }, [router.pathname])

    const toggleMenu = () => {
        setMenuOpened(value => !value)
    }

    return (
        <header className={`${styles.header} ${headerFocused ? styles.focused : styles.scrolled}`}>
            <div className={styles.mainHeaderContainer}>
                {/* the hamburger icon to open menu in small screens */}
                <HamburgerIcon extraClassnames={styles.headerHamburgerMenuIcon} toggleMenu={toggleMenu} menuOpened={menuOpened} />

                {/* website's logo */}
                <span className={styles.logoSpan}>
                    <Link href="/">
                        <a>
                            <WebsiteLogo />
                            <p>
                                <span>Google Developer Student Clubs</span>
                                <span>GDSC GHRCE</span>
                                <span>GHRCE</span>
                            </p>
                        </a>
                    </Link>
                </span>

                {/* the actual navigation section */}
                <nav className={`${menuOpened ? styles.menuActive : ''}`}>
                    <ul>
                        <li className={router.asPath === '/' ? styles.activePage : ''}>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className={router.asPath === '/ourteam' ? styles.activePage : ''}>
                            <Link href="/ourteam">
                                <a>Team</a>
                            </Link>
                        </li>
                        <li className={router.asPath === '/events' ? styles.activePage : ''}>
                            <Link href="/events">
                                <a>Events</a>
                            </Link>
                        </li>
                        <li className={router.asPath === '/blogs' ? styles.activePage : ''}>
                            <Link href="/blogs">
                                <a>Blogs</a>
                            </Link>
                        </li>
                        <li className={router.asPath === '/videos' ? styles.activePage : ''}>
                            <Link href="/videos">
                                <a>Videos</a>
                            </Link>
                        </li>
                        {/* <li className={router.asPath === '/contactus' ? styles.activePage : ''}>
                            <Link href="/contactus">
                                <a>Reach Us</a>
                            </Link>
                        </li> */}

                        {/* linktree implementation */}
                        <li className={router.asPath === '/socials' ? styles.activePage : ''}>
                            <Link href="/socials">
                                <a>More</a>
                            </Link>
                        </li>

                        {/* first theme toggler for large screens */}
                        <li>
                            <button onClick={() => toggleTheme()}>
                                <ThemeToggler />
                            </button>
                        </li>
                    </ul>
                </nav>

                {/**
                 * extra div just to center everything in the view
                 * so instead of making this like bare div we can just set a theme toggling button here*/}
                <div className={styles.extraCenteringDiv}>
                    <button onClick={() => toggleTheme()}>
                        <ThemeToggler />
                    </button>
                </div>
            </div>
        </header>
    )
}
