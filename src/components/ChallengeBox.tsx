import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {

    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganha 400 xp</header>

                    <main>
                        <img src="icons/body.svg" alt=""/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Falhei
                        </button>

                        <button 
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>
                        Inicie um ciclo
                        para receber desafios a
                        serem completados
                    </strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up"/>
                        Complete-os e ganhe
                        experiência e avance de leve.
                    </p>
                </div>
            ) }
        </div>
    )
}