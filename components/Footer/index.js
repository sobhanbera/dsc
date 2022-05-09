import Link from 'next/link'

import { useTheme } from '../../context'
import { CONTACT_AREA_LINK, CONTACT_AREA_NAME, CONTACT_AREA_POSTITION, CONTACT_AREA_PROVIDED } from '../../constants'
import { WebsiteLogo } from '../'
import styles from '../../styles/components/Footer/index.module.css'
import SocialList from '../Icons'

export default function Footer({ triggerSecret }) {
    const { theme } = useTheme()

    return (
        <footer className={styles.footer}>
            <div className={styles.mainFooterContainer}>
                <div className={styles.footerAbove}>
                    {/* website's logo */}
                    <span className={styles.logoSpan}>
                        <Link href="/">
                            <a>
                                <WebsiteLogo />
                                <p>
                                    <span>Google Developer Student Clubs</span>
                                    <span>GHRCE</span>
                                </p>
                            </a>
                        </Link>
                    </span>

                    <div className={`${styles.contactArea} ${styles.container}`}>
                        <span>Contact</span>
                        <span>{CONTACT_AREA_POSTITION}</span>
                        <span>
                            {CONTACT_AREA_PROVIDED} - <a href={CONTACT_AREA_LINK}>dscghrce@gmail.com</a>
                        </span>
                    </div>

                    <div className={`${styles.socialArea} ${styles.container}`}>
                        <span>Social</span>

                        <div className={styles.iconsContainer}>
                            {SocialList.map(Social => {
                                return <Social.Svg key={Social.id} />
                            })}
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <span>
                        <span onClick={triggerSecret}>©</span> {new Date().getFullYear()} GDSC GHRCE. All Rights Reserved.
                    </span>
                    <span>
                        <Link href="/contributions">
                            <a>Developers</a>
                        </Link>
                    </span>
                </div>
            </div>
        </footer>
    )
}
