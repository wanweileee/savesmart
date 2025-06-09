import styles from './styles.module.css';
import Transaction from '../../components/transaction';

const transactions = [
  { name: 'Upwork', date: 'Jan 26, 2022', amount: 850, type: 'income' },
  { name: 'Transfer', date: 'Yesterday', amount: -85, type: 'expense' },
  { name: 'Paypal', date: 'Jan 26, 2022', amount: 1406, type: 'income' },
  { name: 'YouTube', date: 'Jan 26, 2022', amount: -1.19, type: 'expense' },
];

export default function Wallet() {
  return (
    <div className={styles.container}>
      <h1 className={styles.balanceLabel}>Total Balance</h1>
      <p className={styles.balance}>$2,548.00</p>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Transactions</h2>
        <ul className={styles.transactionList}>
          {transactions.map((txn, idx) => (
            <Transaction key={idx} data={txn} />
          ))}
        </ul>
      </div>
    </div>
  );
}
