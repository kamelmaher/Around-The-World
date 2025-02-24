import { ReactNode, useEffect, useState } from "react"
import { themeContext } from "../Hooks/useTheme"
type ThemeContextProps = {
    children: ReactNode
}
const ThemeProvider = ({ children }: ThemeContextProps) => {
    useEffect(() => {
        const data = localStorage.getItem("theme")
        if (data) {
            const ParsedData = JSON.parse(data)
            setTheme(ParsedData)
        }
    }, [])
    const [theme, setTheme] = useState<"dark" | "light">("dark")

    const handleChangeTheme = (theme: "dark" | "light") => {
        setTheme(theme)
        localStorage.setItem("theme", JSON.stringify(theme))
    }

    return (
        <themeContext.Provider value={{ theme, changeTheme: handleChangeTheme }}>
            {children}
        </themeContext.Provider >
    )
}

export default ThemeProvider
