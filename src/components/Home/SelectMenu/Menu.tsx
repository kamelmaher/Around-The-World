import { useTheme } from "../../../Hooks/useTheme"
import styles from "./menu.module.css"
import MenuItem from "./MenuItem"
const Menu = () => {
    const { theme } = useTheme()
    return (
        <ul className={`${styles.menu} ${styles[theme]}`}>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
        </ul>
    )
}

export default Menu
