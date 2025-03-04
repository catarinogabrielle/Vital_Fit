import styles from "./headernav.module.css";

export default function HeaderNav() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>VitalFit</h1>
            </div>
        </div>
    )
}
