import styles from './styles.module.css';
import Transaction from '../../components/transaction';

const topSpending = [
  { name: 'Starbucks', date: 'Jan 26, 2022', amount: -150, type: 'expense' },
  { name: 'Transfer', date: 'Yesterday', amount: -85, type: 'expense' },
  { name: 'YouTube', date: 'Jan 26, 2022', amount: -1.19, type: 'expense' },
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Dashboard</h1>

      {/* Placeholder for a chart */}
      <div className={styles.chart}>
        <p className={styles.chartLabel}>$1,230 Total Expenses</p>
        <div className={styles.fakeChart}></div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Top Spending</h2>
        <ul className={styles.transactionList}>
          {topSpending.map((txn, idx) => (
            <Transaction key={idx} data={txn} />
          ))}
        </ul>
      </div>
    </div>
  );
}
