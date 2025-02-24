import { ReactNode } from "react"
import styles from "./details.module.css"
type DetailProps = {
    children: ReactNode
}
const Detail = ({ children }: DetailProps) => {
    return (
        <div className={styles.detail}>
            {children}
        </div>
    )
}

export default Detail
