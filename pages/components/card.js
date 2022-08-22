import styles from '../../styles/Home.module.css';
import { useSelector } from "react-redux";

export const Card = () => {
    const {value} = useSelector(state=>state)

    return (
        <div className={styles.card}>
            <div className={styles.name}><b>Your Name</b></div>
            <div className={styles.number}>
                {value}
            </div>
            <div className={styles.memo}>Click this card to end this queue</div>
        </div>
    )
}