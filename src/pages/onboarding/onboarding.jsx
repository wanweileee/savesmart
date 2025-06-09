import styles from './styles.module.css';
import piggybank from '../../assets/piggybank.png'; // Replace with actual file path

export default function Onboarding() {
  return (
    <div className={styles.container}>
      <img src={piggybank} alt="Piggy Bank" className={styles.image} />

      <h1 className={styles.title}>SaveSmart</h1>
      <p className={styles.subtitle}>Expense Tracking</p>

      <button className={styles.getStartedBtn}>Get Started</button>

      <p className={styles.loginText}>
        Already have an account? <span className={styles.loginLink}>Log in</span>
      </p>
    </div>
  );
}
