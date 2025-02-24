import { Link } from "react-router-dom"
import { useTheme } from "../../Hooks/useTheme"
import styles from "./country.module.css"
import { Country as CountryType } from "../../types/CountryType"
import { fixNumber } from "../../utils/fixNumber"
type CountryProps = {
    country: CountryType
}
const Country = ({ country }: CountryProps) => {
    const { theme } = useTheme()
    return (
        <Link to={`country/${country.name}`} className={`${styles.country} ${styles[theme]}`}>
            <div className={styles.countryImg}>
                <img src={country.flag} alt="" />
            </div>
            <div className={styles.countryDesc}>
                <h4>{country.name}</h4>
                <div>
                    <p>Population: <span>{fixNumber(country.population)}</span></p>
                    <p>Region: <span>{country.region}</span></p>
                    <p>Capital: <span>{country.capital}</span></p>
                </div>
            </div>
        </Link>
    )
}

export default Country
