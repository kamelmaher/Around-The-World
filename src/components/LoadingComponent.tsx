import { useTheme } from "../Hooks/useTheme"
import loadingImgDark from "/noResults.png"
import loadingImgLight from "/noResults-light.png"

const LoadingComponent = () => {
    const { theme } = useTheme()
    return (
        <div style={{ textAlign: "center" }}>
            <div>
                <img src={theme == "dark" ? loadingImgDark : loadingImgLight} alt="" loading="lazy"/>
            </div>
            <div style={{ transform: "translateY(-70%)" }}>
                <h3>No Results Found</h3>
                <p>We can’t find the country you searched for...
                    Try to search for another one</p>
            </div>
        </div>
    )
}

export default LoadingComponent;
