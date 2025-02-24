import { Country } from "../../types/CountryType"
import Detail from "./Detail"
import styles from "./details.module.css"
type CountryDetailsProps = {
    country: Country
}
const CountryDetails = ({ country }: CountryDetailsProps) => {
    return (
        <div className={styles.countryDetails}>
            <Detail>
                <img src={country.flag} alt="" width={"100%"} />
            </Detail>
            <Detail>
                <div className={styles.details}>
                    <div>
                        <h3>{country.name}</h3>
                        <div className={styles.desc}>
                            <p>Native Name: <span>{country.nativeName}</span></p>
                            <p>Population:  <span>{country.population}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Capital: <span>{country.capital}</span></p>
                        </div>
                    </div>
                    <div className={styles.desc}>
                        <p>Currencies: <span>{country.currency.join(" , ")}  </span></p>
                        <p>Languages: <span>{country.langs.join(" , ")}</span></p>
                    </div>
                </div>
            </Detail>
        </div>
    )
}

export default CountryDetails
