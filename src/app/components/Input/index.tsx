import { forwardRef } from "react";
import styles from './Input.module.css';

type Props = {
    label: string,
    maxLenght: number,
    placeholder: string,
    errorMessage: string,
}

const Input = forwardRef<HTMLInputElement, Props>(({ label, maxLenght, placeholder, errorMessage, ...props }, ref) => {
    return (
        <div className={styles.container}>
            <label className={errorMessage ? styles.labelError : styles.label}>{label}</label>
            <input className={errorMessage ? styles.inputError : styles.input} ref={ref} maxLength={maxLenght} placeholder={placeholder} {...props} />

            {errorMessage && (
                <span className={styles.errorLabel}>{errorMessage}</span>
            )}
        </div>
    );
})

export default Input;