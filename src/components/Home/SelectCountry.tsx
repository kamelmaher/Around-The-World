import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../Hooks/useTheme";
import styles from "./home.module.css"
import Menu from "./SelectMenu/Menu";
import { useEffect, useRef } from "react";
import { useMenu } from "../../Hooks/useMenu";
import { useData } from "../../Hooks/useData";
const SelectCountry = () => {
    const { showMenu, handleChangeMenu } = useMenu()
    const { theme } = useTheme()
    const { regionVal, handleRegionVal } = useData()
    const menuRef = useRef<HTMLDivElement | null>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current?.contains(event.target as Node))
            handleChangeMenu(false)
    }
    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)
        return () => window.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <div className={`${styles.menu} ${styles[theme]}`} ref={menuRef}>
            <div onClick={() => handleChangeMenu(!showMenu)}>
                <input className={styles.select} placeholder="Filter by Region" value={regionVal} onChange={e => handleRegionVal(e)} />
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            {showMenu && <Menu />}
        </div >
    );
}

export default SelectCountry
