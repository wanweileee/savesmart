import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import piggybank from '../../assets/piggybank.png';

export default function Onboarding() {
  return (
    <div className={styles.container}>
      <img src={piggybank} alt="Piggy Bank" className={styles.image} />

      <button className={styles.getStartedBtn}>Get Started</button>

      <p className={styles.loginText}>
        Already have an account?{' '}
        <Link to="/login" className={styles.loginLink}>
          Log in
        </Link>
      </p>
    </div>
  );
}
