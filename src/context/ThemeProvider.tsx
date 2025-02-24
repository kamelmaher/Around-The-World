import { ReactNode, useState } from "react"
import { themeContext } from "../Hooks/useTheme"
type ThemeContextProps = {
    children: ReactNode
}
const ThemeProvider = ({ children }: ThemeContextProps) => {
    const [theme, setTheme] = useState<"dark" | "light">("dark")
    const handleChangeTheme = () => setTheme(prev => prev == "dark" ? "light" : "dark")

    return (
        <themeContext.Provider value={{ theme, changeTheme: handleChangeTheme }}>
            {children}
        </themeContext.Provider >
    )
}

export default ThemeProvider
