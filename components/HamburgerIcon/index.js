import styles from '../../styles/components/HamburgerIcon/index.module.css'

export default function HamburgerIcon({menuOpened, toggleMenu, extraClassnames}) {
    return (
        <div className={`${extraClassnames} ${styles.hamburgerIcon} ${menuOpened ? styles.opened : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
