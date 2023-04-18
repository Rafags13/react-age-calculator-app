import { memo, ReactNode } from "react";
import styles from './Card.module.css';

type Props = {
    children: ReactNode
}

function Card({ children }: Props) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default memo(Card);