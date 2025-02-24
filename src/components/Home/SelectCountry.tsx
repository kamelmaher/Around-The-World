import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../Hooks/useTheme";
import styles from "./home.module.css"
import Menu from "./SelectMenu/Menu";
import { useEffect, useRef } from "react";
import { useMenu } from "../../Hooks/useMenu";
const SelectCountry = () => {
    const { showMenu, handleChangeMenu } = useMenu()
    const { theme } = useTheme()
    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef && !menuRef.current?.contains(event.target as Node))
            handleChangeMenu()
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)
        return () => window.removeEventListener("mousedown", handleClickOutside)
    }, [])
    return (
        <div className={`${styles.menu} ${styles[theme]}`} ref={menuRef}>
            <div onClick={() => handleChangeMenu()}>
                <input className={styles.select} placeholder="Filter by Region" />
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            {showMenu && <Menu />}
        </div >
    );
}

export default SelectCountry
