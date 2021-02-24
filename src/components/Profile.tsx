import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/FelipeFerreiraSS.png" alt="Felipe Ferreira"/>
            <div>
                <strong>Felipe Ferreira</strong>
                <p>
                    <img src="icons/Level.svg" alt="level"/>
                    Level 1

                </p>
            </div>
        </div>
    )
}