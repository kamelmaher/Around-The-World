import Search from "../components/Home/Search"
import styles from "./home.module.css"
import { useTheme } from "../Hooks/useTheme"
import SelectCountry from "../components/Home/SelectCountry"
import MenuProvider from "../context/MenuProvider"
import Container from "../components/Countries/Container"
export const Home = () => {
    const { theme } = useTheme()
    return (
        <div className={`${styles.home} ${styles[theme]} `}>
            <div className={styles.filters}>
                <Search />
                <MenuProvider>
                    <SelectCountry />
                </MenuProvider>
            </div>
            <Container />
        </div>
    )
}