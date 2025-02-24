import { useParams } from "react-router-dom"
import Back from "../components/Details/Back"
import CountryDetails from "../components/Details/CountryDetails"
import { useEffect, useState } from "react"
import { Country } from "../types/CountryType"
import { getRealCountry } from "../utils/getRealCountry"
import LoadingComponent from "../components/LoadingComponent"

export const DetailsPage = () => {
    const { countryName } = useParams()
    const [isLoading, setIsLoading] = useState(false)

    const [country, setCountry] = useState<Country>({
        name: "",
        nativeName: "",
        population: 0,
        capital: "",
        currency: [],
        langs: [],
        flag: "",
        region: ""
    })
    useEffect(() => {
        setIsLoading(true)
        try {
            fetch(`https://restcountries.com/v3.1/name/${countryName}`).then(response => response.json())
                .then(data => {
                    setCountry(getRealCountry(data[0]))
                    setIsLoading(false)
                })
        } catch {
            throw new Error()
        }
    }, [])

    return <div>
        <Back />
        {
            !isLoading ?
                <CountryDetails country={country} />
                : <LoadingComponent />
        }
    </div>
}