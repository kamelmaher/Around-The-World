import { useMenu } from "../../../Hooks/useMenu"
import styles from "./menu.module.css"
const MenuItem = () => {
    const { handleChangeMenu } = useMenu()
    return (
        <li className={styles.menuItem} onClick={handleChangeMenu}>
            Menu Item
        </li>
    )
}

export default MenuItem
