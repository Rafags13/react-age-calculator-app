import styles from './BigLabel.module.css'

type Props = {
    value: string,
    descriptionOfValue: string,
}

export default function BigLabel({ value, descriptionOfValue }: Props) {
    return (
        <div className={styles.container}>
            <span className={styles.value}>{value}</span>
            <span className={styles.descriptionOfValue}>{descriptionOfValue}</span>
        </div>
    )
}