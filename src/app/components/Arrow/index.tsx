import styles from './Arrow.module.css';
import arrow from '../../../assets/images/icon-arrow.svg';

export default function Arrow() {
    return (
        <button className={styles.button} type='submit'>
            <img src={arrow} alt="arrow!!!" />
        </button>
    )
}