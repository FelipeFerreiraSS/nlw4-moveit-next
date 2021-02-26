import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/FelipeFerreiraSS.png" alt="Felipe Ferreira"/>
            <div>
                <strong>Felipe Ferreira</strong>
                <p>
                    <img src="icons/Level.svg" alt="level"/>
                    Level {level}

                </p>
            </div>
        </div>
    )
}