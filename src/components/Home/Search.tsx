import styles from "./home.module.css"
import { useTheme } from "../../Hooks/useTheme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
const Search = () => {
    const { theme } = useTheme()
    return (
        <div className={`${styles.search} ${styles[theme]}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" placeholder="Search for a country" />
        </div>
    )
}

export default Search
