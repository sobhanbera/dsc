import styles from '../../styles/components/Logo/index.module.css'

export default function GDSC_GHRCELogo() {
    return (
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="150" height="150">
            <defs></defs>
            <title>dsc_icon</title>
            <path className={styles.logoRedPart} d="M46.36,96.68,77,79A15.06,15.06,0,1,0,61.91,52.91L9,83.45Z" />
            <path className={styles.logoBluePart} d="M69.43,142.11A15.07,15.07,0,0,0,77,114L24.07,83.45A15.06,15.06,0,0,0,9,109.54l52.9,30.54A15,15,0,0,0,69.43,142.11Z" />
            <path className={styles.logoGreenPart} d="M122.05,142.11a15,15,0,0,0,7.52-2l52.9-30.54L145.59,96.05,114.5,114a15.07,15.07,0,0,0,7.55,28.12Z" />
            <path className={styles.logoYellowPart} d="M174.92,111.56a15.06,15.06,0,0,0,7.55-28.11l-52.9-30.54A15.06,15.06,0,0,0,114.5,79l52.9,30.54A15,15,0,0,0,174.92,111.56Z" />
        </svg>
    )
}
