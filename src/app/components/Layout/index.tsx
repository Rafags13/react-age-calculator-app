import { memo, ReactNode } from "react"
import styles from './Layout.module.css';

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {
    return <div className={styles.container}>{children}</div>
}

export default memo(Layout);