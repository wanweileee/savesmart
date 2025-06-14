import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import piggybank from '../../assets/piggybank.png';

export default function Onboarding() {
  return (
    <div className={styles.container}>
      <img src={piggybank} alt="Piggy Bank" className={styles.image} />
     <Link to="/login" className={styles.getStartedBtn}>Login</Link>
    </div>
  );
}
