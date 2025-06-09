import { Link } from 'react-router-dom'; 
import styles from './styles.module.css';
import Transaction from '../../components/transaction';

const recentTransactions = [
  { name: 'Upwork', date: 'Jan 26, 2022', amount: 850 },
  { name: 'Transfer', date: 'Yesterday', amount: -85 },
  { name: 'YouTube', date: 'Jan 26, 2022', amount: -1.19 },
];

export default function Homepage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.greeting}>Hello, Wan Wei 👋</h2>
        <p className={styles.subtitle}>Welcome back!</p>
      </header>

      <section className={styles.balanceCard}>
        <p className={styles.balanceLabel}>Your Balance</p>
        <h1 className={styles.balance}>$2,548.00</h1>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Recent Transactions</h3>
        <ul className={styles.transactionList}>
          {recentTransactions.map((txn, idx) => (
            <Transaction key={idx} data={txn} />
          ))}
        </ul>
      </section>

      <Link to="/camera" className={styles.floatingAddBtn}>+</Link>
    </div>
  );
}
