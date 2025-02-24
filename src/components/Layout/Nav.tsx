import styles from "./nav.module.css"
import ThemeButton from "./ThemeButton"
import { useTheme } from "../../Hooks/useTheme"

const Nav = () => {
    const { theme } = useTheme()
    return (
        <div className={`${styles.nav} ${styles[theme]}`}>
            <h3>Around The World</h3>
            <ThemeButton />
        </div>
    )
}

export default Nav
