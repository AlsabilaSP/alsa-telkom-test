import styles from '../../styles/Home.module.css'

export const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.name}><b>Your Name</b></div>
            <div className={styles.number}>
                1
            </div>
            <div className={styles.memo}>Click this card to end the queue</div>
        </div>
    )
}