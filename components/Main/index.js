import Link from "next/link"
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import styles from '../../styles/components/Main/Main.module.css'
function HomeCard({ heading, subcontent, content, buttonTitle, inputPlaceholder, children }) {
    useEffect(() => {
        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, [])
    return (
        <>
            {/* <style jsx>
                {
                    `
             
                    `
                }
            </style> */}
            <div
                data-aos="fade-up"
                data-aos-offset="-90" //this decide how fast the elements should be visible at bottom
                data-aos-delay="5" //this decides of earlier the element should be visible
                data-aos-duration="200" //this decides the duration of the animation
                data-aos-easing="ease-in-out" //effect of animation
                data-aos-mirror="false"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
                className={styles.homeCard}>
                {(heading) ? <h1 className={styles.heading}>{heading}</h1> : null}
                {(subcontent) ? <p className={styles.para}>{subcontent}</p> : null}
                {(content) ? <p className={styles.para}>{content}</p> : null}
                {(inputPlaceholder) ? <input className={styles.inp} type='text' placeholder={inputPlaceholder} /> : null}
                {(buttonTitle) ? <button className={styles.btn}>{buttonTitle}</button> : null}
                {children}
            </div>

        </>

    )
}

export default HomeCard;
