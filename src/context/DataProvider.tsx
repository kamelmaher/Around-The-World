import { ReactNode, useEffect, useState } from "react"
import { Country } from "../types/CountryType"
import { getRealCountry } from "../utils/getRealCountry"
import { dataContext } from "../Hooks/useData"
type DataProvider = {
    children: ReactNode
}
const DataProvider = ({ children }: DataProvider) => {
    const [countries, setCountries] = useState<Country[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [searchVal, setSearchVal] = useState("")
    const [regionVal, setRegionVal] = useState("")
    const handleSearchVal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchVal(e.target.value)
    }
    const handleRegionVal = (e: string | React.ChangeEvent<HTMLInputElement>) => {
        if (typeof e === "string")
            setRegionVal(e)
        else setRegionVal(e.target.value)
    }
    useEffect(() => {
        setIsLoading(true)
        try {
            fetch("https://restcountries.com/v3.1/all").then(response => response.json())
                .then(data => {
                    data.map(country => setCountries(prev => [...prev, getRealCountry(country)]))
                })
        } catch {
            throw new Error()
        } finally {
            setIsLoading(false)
        }
    }, [])

    return <dataContext.Provider value={{ countries, isLoading, searchVal, handleSearchVal, regionVal, handleRegionVal }}>
        {children}
    </dataContext.Provider>
}
export default DataProvider