import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import Transaction from '../../components/transaction';
import addIcon from '../../assets/add-icon.png';
import topBackground from '../../assets/bg.png';
import notificationIcon from '../../assets/notification.png';

const recentTransactions = [
  { name: 'Upwork', date: 'Today', amount: 850 },
  { name: 'Transfer', date: 'Yesterday', amount: -85 },
  { name: 'Paypal', date: 'Jan 30, 2022', amount: 1406 },
  { name: 'YouTube', date: 'Jan 16, 2022', amount: -11.99 },
];

export default function Homepage() {
  return (
    <div className={styles.container}>
      {/* Header with background image */}
      <header
        className={styles.heroHeader}
        style={{
          backgroundImage: `url(${topBackground})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <h2 className={styles.greeting}>Good afternoon,<br />Wan Wei 👋</h2>

        {/* Optional notification icon */}
        <div className={styles.headerIcons}>
            <img src={notificationIcon} alt="Notification" className={styles.iconButton} />
        </div>
      </header>

      {/* Balance Card (floated upward) */}
      <section className={styles.balanceCardWrapper}>
        <div className={styles.balanceCard}>
          <div className={styles.balanceTop}>
            <span className={styles.balanceLabel}>Total Balance</span>
            <span className={styles.balanceMenu}>⋯</span>
          </div>
          <div className={styles.balanceValue}>$2,548.00</div>
          <div className={styles.balanceBreakdown}>
            <div className={styles.statBox}>
              <span className={styles.statIcon}>↓</span>
              <div>
                <p className={styles.statLabel}>Income</p>
                <p className={styles.statAmount}>$1,840.00</p>
              </div>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statIcon}>↑</span>
              <div>
                <p className={styles.statLabel}>Expenses</p>
                <p className={styles.statAmount}>$284.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Transactions */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>Transactions History</h3>
          <Link to="/wallet" className={styles.seeAll}>See all</Link>
        </div>
        <ul className={styles.transactionList}>
          {recentTransactions.map((txn, idx) => (
            <Transaction key={idx} data={txn} />
          ))}
        </ul>
      </section>

      {/* Floating Add Button */}
      <Link to="/add-expense" className={styles.floatingAddBtn}>
        <img src={addIcon} alt="Add" className={styles.addIcon} />
      </Link>
    </div>
  );
}
