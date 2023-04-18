import { ReactNode } from "react"
import styles from './Row.module.css'

type Props = {
    children: ReactNode,
    style?: React.CSSProperties
}

export default function Row({ children, style }: Props) {
    return (
        <div className={styles.row} style={style}>
            {children}
        </div>
    )
}