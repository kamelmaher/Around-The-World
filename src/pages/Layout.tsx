import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Nav from "../components/Layout/Nav"
import { useTheme } from "../Hooks/useTheme"
import DataProvider from "../context/DataProvider"
export const Layout = () => {
    const { theme } = useTheme()
    return (
        <DataProvider>
            <div>
                <Nav />
                <div className={`${styles.outlet} ${styles[theme]}`}>
                    <Outlet />
                </div>
            </div>
        </DataProvider>
    )
}

