import { useData } from "../../../Hooks/useData"
import { useMenu } from "../../../Hooks/useMenu"
import styles from "./menu.module.css"
type MenuItemProps = {
    value: string
}
const MenuItem = ({ value }: MenuItemProps) => {
    const { handleChangeMenu } = useMenu()
    const { handleRegionVal } = useData()
    return (
        <li
            className={styles.menuItem}
            onClick={() => {
                handleChangeMenu(false)
                handleRegionVal(value)
            }}
        >
            {value}
        </li>
    )
}

export default MenuItem
