import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./details.module.css"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { useTheme } from "../../Hooks/useTheme"
import { Link } from "react-router-dom"
const Back = () => {
    const { theme } = useTheme()
    return (
        <Link to={"/"} className={`${styles.back} ${styles[theme]}`}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
    )
}

export default Back
