import "./themebutton.css"
import { useTheme } from "../../Hooks/useTheme"

const ThemeButton = () => {

    const { theme, changeTheme } = useTheme()
    return (
        <button className={`toggle_label `} onClick={() => changeTheme(theme == "dark" ? "light" : "dark")}>
            <input type="checkbox" id="mode" className="toggle" />
            <span className={`slider round ${theme == "light" && "slide"}`}>
                <i className="fa-solid fa-moon fa-lg fa-spin moon"></i>
                <i className="fa-solid fa-sun fa-spin fa-lg sun"></i>
            </span>
        </button>
    )
}

export default ThemeButton
