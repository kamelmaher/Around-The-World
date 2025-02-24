import { useTheme } from "../../../Hooks/useTheme"
import { regions } from "../../../utils/filterByRegion"
import styles from "./menu.module.css"
import MenuItem from "./MenuItem"
const Menu = () => {
    const { theme } = useTheme()
    return (
        <ul className={`${styles.menu} ${styles[theme]}`}>
            <MenuItem value="All" />
            {
                regions.map(region => <MenuItem key={region} value={region} />)
            }
        </ul>
    )
}

export default Menu
