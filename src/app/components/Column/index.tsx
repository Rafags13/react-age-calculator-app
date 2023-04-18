import { ReactNode } from "react";
import styles from './Column.module.css';

type Props = {
    children: ReactNode
}

export default function Column({ children }: Props) {
    return (
        <div className={styles.column}>
            {children}
        </div>
    )
}