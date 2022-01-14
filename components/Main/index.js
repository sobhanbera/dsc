import Link from 'next/link'
import 'aos/dist/aos.css'

import styles from '../../styles/components/Main/Main.module.css'
function HomeCard({heading, subcontent, content, buttonTitle, inputPlaceholder, link, children}) {
    return (
        <div
            data-aos="fade-up"
            // data-aos-offset="-90" //this decide how fast the elements should be visible at bottom
            // data-aos-delay="5" //this decides of earlier the element should be visible
            // data-aos-duration="200" //this decides the duration of the animation
            // data-aos-easing="ease-in-out" //effect of animation
            // data-aos-mirror="false"
            // data-aos-once="false"
            // data-aos-anchor-placement="top-center"
            className={styles.homeCard}>
            {heading ? <h1 className={styles.heading}>{heading}</h1> : null}
            {subcontent ? <p className={styles.para}>{subcontent}</p> : null}
            {content ? <p className={styles.para}>{content}</p> : null}
            {inputPlaceholder ? <input className={styles.inp} type="text" placeholder={inputPlaceholder} /> : null}
            {buttonTitle ? (
                <button className={styles.btn}>
                    <a href={link}>{buttonTitle}</a>
                </button>
            ) : null}
            {children}
        </div>
    )
}

export default HomeCard
