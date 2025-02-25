import { useData } from "../../Hooks/useData"
import { Country as CountryType } from "../../types/CountryType"
import { filterByRegion } from "../../utils/filterByRegion"
import { searchCountry } from "../../utils/searchCountry"
import LoadingComponent from "../LoadingComponent"
import Country from "./Country"
import styles from "./country.module.css"
const Container = () => {
    const { countries } = useData()

    const { isLoading, searchVal, regionVal } = useData()

    const filteredCountries = searchCountry(searchVal, countries)

    const filteredByRegion = filterByRegion(regionVal, searchVal == "" ? countries : filteredCountries)
    
    let finalData: CountryType[] = []
    if (searchVal != "" && regionVal == "") // Search Val Not Empty / Region is Empty
        finalData = filteredCountries
    else
        finalData = filteredByRegion
    return (
        <>
            {
                !isLoading && finalData.length > 0 ?
                    <div className={styles.container}>
                        {
                            finalData.map(country => <Country key={country.name} country={country} />)
                        }
                    </div> : <LoadingComponent />
            }
        </>
    )
}

export default Container
