import styles from "./home.module.css"
import { useTheme } from "../../Hooks/useTheme"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useData } from "../../Hooks/useData"
const Search = () => {
    const { theme } = useTheme()
    const { searchVal, handleSearchVal } = useData()
    return (
        <div className={`${styles.search} ${styles[theme]}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input
                type="text"
                value={searchVal}
                placeholder="Search for a country"
                onChange={handleSearchVal}
            />
        </div>
    )
}

export default Search
