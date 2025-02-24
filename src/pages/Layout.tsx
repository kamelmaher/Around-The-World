import { Outlet } from "react-router-dom"
import styles from "./layout.module.css"
import Nav from "../components/Layout/Nav"
import ThemeProvider from "../context/ThemeProvider"
export const Layout = () => {
    return (
        <ThemeProvider>
            <div className={styles.layout}>
                <Nav />
                <div className={styles.outlet}>
                    <Outlet />
                </div>
            </div>
        </ThemeProvider>
    )
}

